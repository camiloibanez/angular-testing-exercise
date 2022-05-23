import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './03-setup-and-teardown/vote.component';
import { TodoFormComponent } from './04-forms/todo-form.component';
import { Vote2Component } from './05-event-emitters/vote2.component';
import { TodosComponent } from './06-services/todos.component';
import { TodoService } from './06-services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    TodoFormComponent,
    Vote2Component,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
