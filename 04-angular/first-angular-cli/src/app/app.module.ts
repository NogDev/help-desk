import { HttpClientModule } from '@angular/common/http';
import { CommentService } from './comments/comments.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CommentsComponent } from './comments/comments.component';
import { ValidingFormComponent } from './validing-form/validing-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    CommentsComponent,
    ValidingFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
