import { ElementRef, HostListener, Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',

})
export class BorderCardDirective {

  private initialColor: string = '#A3F56E'
  private defaultColor: string = '#CFBF1F'
  private defaultHeight: number = 180

  constructor(private elementRef: ElementRef ) {
    this.setHeight(this.defaultHeight)
    this.setBorder(this.initialColor)
  }


  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.defaultColor)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor)
  }

  setHeight(height: number) {
    this.elementRef.nativeElement.style.height = `${height}px`
  }

  setBorder(color: string) {
    this.elementRef.nativeElement.style.border = `solid 4px ${color}`
  }
}
