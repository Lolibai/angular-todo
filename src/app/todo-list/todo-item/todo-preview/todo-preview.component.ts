import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-preview",
  template: `
    <div class="wrapper">
      <span>{{ name }}</span>
      <button (click)="onEditClick.emit()">Edit</button>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100%;
      }
    `
  ]
})
export class TodoPreviewComponent implements OnInit {
  @Input() name: string;
  @Output() onEditClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
