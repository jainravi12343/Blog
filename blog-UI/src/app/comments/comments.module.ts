import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from '../services/comments.service';
import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
    CommentFormComponent
  ],
  exports:[
    CommentComponent,
    CommentsComponent,
    CommentFormComponent, 
  ],
  providers:[
    CommentsService
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ]
})
export class CommentsModule { }
