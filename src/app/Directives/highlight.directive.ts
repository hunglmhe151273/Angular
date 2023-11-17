import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
 @Input('appHighlight') appHighlight = '';

  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    console.log('appHighlight is running');
    console.log('Color'+ this.appHighlight);
    this.el.nativeElement.style.color = this.appHighlight;
  }

}
