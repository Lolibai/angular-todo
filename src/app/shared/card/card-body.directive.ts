import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appCardBody]"
})
export class CardBodyDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style = `
      padding: 20px;
    `;
  }
}
