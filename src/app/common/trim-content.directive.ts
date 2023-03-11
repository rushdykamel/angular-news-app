import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[trimContent]'
})
export class TrimContentDirective implements OnChanges {

  @Input() trimContent: number = 0;
  @Input() originalModel: string = "";
  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    this.trimElementContent();
  }

  trimElementContent(): void {
    let htmlContent = this.originalModel;
    if (htmlContent.length === 0) return;
    if (htmlContent.length > this.trimContent) {
      this.el.nativeElement.innerHTML = htmlContent.slice(0, this.trimContent) + '...';
    } else {
      this.el.nativeElement.innerHTML = this.originalModel
    }
  }

}
