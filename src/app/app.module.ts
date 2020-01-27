import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoItemComponent } from "./todo-list/todo-item/todo-item.component";
import { CardComponent } from "./shared/card/card.component";
import { CardHeaderDirective } from "./shared/card/card-header.directive";
import { CardBodyDirective } from "./shared/card/card-body.directive";
import { CardFooterDirective } from "./shared/card/card-footer.directive";
import { TodoPreviewComponent } from './todo-list/todo-item/todo-preview/todo-preview.component';
import { TodoEditComponent } from './todo-list/todo-item/todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    CardComponent,
    CardHeaderDirective,
    CardBodyDirective,
    CardFooterDirective,
    TodoPreviewComponent,
    TodoEditComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
