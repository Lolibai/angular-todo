import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appCardHeader]"
})
export class CardHeaderDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style = `
      border-bottom: 1px solid gray;
      padding: 20px
    `;
  }
}
