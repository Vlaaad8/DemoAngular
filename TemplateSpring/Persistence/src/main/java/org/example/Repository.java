package org.example;

import java.util.List;
import java.util.Optional;

public interface Repository<T> {

    List<T> findAll();

    Optional<T> getById(int id);

    Optional<T> save(T entity);

    Optional<T> delete(int id);

    public Optional<T> update(T entity);
}
