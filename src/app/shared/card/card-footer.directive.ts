import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appCardFooter]"
})
export class CardFooterDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style = `
      border-top: 1px solid gray;
      padding: 20px;
    `;
  }
}
