package org.example;

import jdk.swing.interop.SwingInterOpUtils;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;

import javax.swing.tree.TreeNode;
import java.util.List;
import java.util.Optional;

@Repository
public class RepositoryCarImpl implements RepositoryCar {
    @Override
    public List<Car> findAll() {
        try(Session session=HibernateUtils.getSessionFactory().openSession()){
            return session.createQuery("from Car").list();
        }
    }

    @Override
    public Optional<Car> getById(int id) {
        try(Session session=HibernateUtils.getSessionFactory().openSession()){
            return session.createQuery("from Car where id=:id", Car.class).setParameter("id", id).uniqueResultOptional();
        }
    }

    @Override
    public Optional<Car> save(Car entity) {
        Transaction transaction = null;
        try(Session session=HibernateUtils.getSessionFactory().openSession()){
            transaction = session.beginTransaction();
            System.out.println(entity.toString());
            session.persist(entity);
            transaction.commit();
            return Optional.of(entity);
        }
        catch(HibernateException e){
            if(transaction!=null){
                transaction.rollback();
            }
            throw new RuntimeException(e);
        }
    }

    @Override
    public Optional<Car> delete(int id) {
        Transaction transaction = null;
        try(Session session=HibernateUtils.getSessionFactory().openSession()){
            transaction = session.beginTransaction();
            Car car = session.find(Car.class, id);
            System.out.println(car.getColor()+" "+car.getModel());
            session.remove(car);
            transaction.commit();
            return Optional.of(car);
        }
        catch(HibernateException e){
            if(transaction!=null) {
                transaction.rollback();
            }
            throw new RuntimeException(e);
        }
    }
    public Optional<Car> update(Car entity) {
        Transaction transaction = null;
        try(Session session=HibernateUtils.getSessionFactory().openSession()){
            transaction = session.beginTransaction();
            session.merge(entity);
            transaction.commit();
            return Optional.of(entity);
        }
        catch(HibernateException e){
            if(transaction!=null){
                transaction.rollback();
            }
            throw new RuntimeException(e);
        }
    }
}
