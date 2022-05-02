import { ElementRef, HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  constructor(private elementRef: ElementRef ) {
    this.setHeight(180)
    this.setBorder('#a3f1f1')
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#529688')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f1f1f1')
  }

  setHeight(height: number) {
    this.elementRef.nativeElement.style.height = `${height}px`
  }

  setBorder(color: string) {
    this.elementRef.nativeElement.style.border = `solid 4px ${color}`
  }
}
