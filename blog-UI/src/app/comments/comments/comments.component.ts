import { outputAst } from '@angular/compiler';
import { Component,Input ,OnInit, Output} from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { ActiveCommentInterface } from 'src/app/types/activeComment';
import { CommentInterface } from 'src/app/types/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() currentUserId:string='';
  
 @Output() comments :CommentInterface[]=[];
  activeComment:ActiveCommentInterface  |null =null;
  constructor(
    private commentService:CommentsService
  ){}

  ngOnInit(): void {
    this.commentService.getComments().subscribe(
      (comments:any)=>{
        this.comments=comments;
        console.log(comments);
      }
     )
  }

  updateComment({ text,commentId,}:{  text: string;  commentId: string; }):void{
    // console.log("Update Clicked")
    this.commentService.
    updateComment(commentId, text)
    .subscribe((updatedComment) => {
      this.comments = this.comments.map((comment) => {
        if (comment.id === commentId) {
          return updatedComment;
        }
        return comment;
      });

      this.activeComment = null;
    });
  }


  addComment({text,parentId}:{text:string,parentId:null|string}):void{
    // console.log('addComment',text,parentId);
    this.commentService.createComment(text,parentId).subscribe(
      createdComment=>{
        console.log(createdComment)
        this.comments =[...this.comments,createdComment]
        this.activeComment=null;
      },(error:any)=>{
          console.log("Errror ")
      }
    )
  }
  getReplies(commentId:string):CommentInterface[]{
    return this.comments.filter(comment =>
      comment.parentId===commentId)
      .sort((a,b)=>
        new Date(a.createdAt).getMilliseconds()-
        new Date(b.createdAt).getMilliseconds()
      );
  }
  setActiveComment(activeComment:ActiveCommentInterface |null):void{
    this.activeComment=activeComment;
  }

  deleteComment(commentId:string):void{
    this.commentService.deleteComment(commentId).subscribe(
      ()=>{
        this.comments=this.comments.filter(comment=>comment.id !== commentId)

      }
    
      );
  }
}
