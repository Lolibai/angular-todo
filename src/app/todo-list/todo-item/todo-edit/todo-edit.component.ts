import { Input, Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-edit",
  template: `
    <div class="wrapper">
      <input [value]="name" />
      <button (click)="onCancelClick.emit()">Cancel</button>
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
export class TodoEditComponent implements OnInit {
  @Input() name: string;
  @Output() onCancelClick = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
