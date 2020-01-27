import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-todo-item",
  template: `
    <div class="todo-item">
      <app-todo-preview
        *ngIf="!isEdit"
        [name]="name"
        (onEditClick)="setIsEdit(true)"
      ></app-todo-preview>
      <app-todo-edit
        *ngIf="isEdit"
        [name]="name"
        (onCancelClick)="setIsEdit(false)"
      ></app-todo-edit>
    </div>
  `,
  styles: [
    `
      .todo-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        box-shadow: 0px 4px 10px -5px;
        margin: 20px;
        padding: 20px;
      }
    `
  ]
})
export class TodoItemComponent implements OnInit {
  @Input() name: string;
  isEdit = false;

  constructor() {}

  ngOnInit() {}

  setIsEdit(state) {
    this.isEdit = state;
  }
}
