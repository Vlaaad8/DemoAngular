import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor='red'
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor=''
  }

}
