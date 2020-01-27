import { Component, OnInit, TemplateRef, ContentChild } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @ContentChild(TemplateRef, { static: true }) template: any;

  constructor() {}

  ngOnInit() {}
}
