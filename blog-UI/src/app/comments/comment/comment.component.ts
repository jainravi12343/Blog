import { Component ,Input,OnInit,Output} from '@angular/core';
import { ActiveCommentEnum } from 'src/app/types/ActiveCommentEnum';
import { CommentInterface } from 'src/app/types/Comment';
import {EventEmitter} from '@angular/core'
import { ActiveCommentInterface } from 'src/app/types/activeComment';
import { UntypedFormArray } from '@angular/forms';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{

  @Input() comment!: CommentInterface;
  @Input() activeComment!: ActiveCommentInterface | null;
  @Input() replies!: CommentInterface[];
  @Input() currentUserId!: string;
  @Input() parentId!: string | null;

  @Output()
  setActiveComment = new EventEmitter<ActiveCommentInterface | null>();
  @Output()
  deleteComment = new EventEmitter<string>();
  @Output()
  addComment = new EventEmitter<{ text: string; parentId: string | null }>();
  @Output()
  updateComment = new EventEmitter<{ text: string; commentId: string }>();

  createdAt: string = '';
  canReply: boolean = false;
  canEdit: boolean = false;
  canDelete: boolean = false;
  activeCommentType = ActiveCommentEnum;
  replyId: string | null = null;

  ngOnInit(): void {
    const fiveMinutes = 300000;
    const timePassed =
      new Date().getMilliseconds() -
        new Date(this.comment.createdAt).getMilliseconds() >
      fiveMinutes;
    this.createdAt = new Date(this.comment.createdAt).toLocaleDateString();
    this.canReply = Boolean(this.currentUserId);
    this.canEdit = this.currentUserId === this.comment.userId && !timePassed;
    this.canDelete =
      this.currentUserId === this.comment.userId &&
      this.replies.length === 0 &&
      !timePassed;
    this.replyId = this.parentId ? this.parentId : this.comment.id;
    // this.isReplying();
  }

  isReplying(): boolean {
    // return true;
    console.log(this.activeComment)
    if (!this.activeComment) {
      return false;
    }
    return (
      this.activeComment.id === this.comment.id &&
      this.activeComment.type === this.activeCommentType.replying
    );
  }

  isEditing(): boolean {
    if (!this.activeComment) {
      return false;
    }
    return (
      this.activeComment.id === this.comment.id &&
      this.activeComment.type === 'editing'
    );
  }

  // @Input() currentUserId!:string;
  // @Input() replies:CommentInterface[]=[];
  // @Output() setActiveComment= new EventEmitter< ActiveCommentInterface|null>();
  // @Input() comment!:CommentInterface
  // @Input() activeComment:ActiveCommentInterface | null=null;
  // @Input() parentId:string |null=null;
  
  // canReply:boolean=false
  // canEdit:boolean=false
  // canDelete:boolean=false
  // activeCommentType=ActiveCommentEnum
  // // replyId:string | null | undefined  
  // replyId: string | null = null;
  // @Output () addComment=new EventEmitter<{
  //   text:string,
  //   parentId :string |null;
  // }>();
  // ngOnInit(): void {
  //  const fiveMinutes=300000
  //  const timepassed= new Date().getMilliseconds()-
  //         new Date(this.comment.createdAt).getMilliseconds() >fiveMinutes;
  //   this.canReply=Boolean(this.currentUserId)
  //   this.canEdit=this.currentUserId===this.comment.userId ;
  //   console.log(this.canEdit)
  //   this.canDelete=this.currentUserId===this.comment.userId && !timepassed && this.replies.length===0;
  //   this.replyId=this.parentId ?this.parentId:this.comment.id;

  // }
  // isReplying(): boolean{
  //   console.log("Replying Clikced")
  //   if(!this.activeComment)return false;
  //   return (this.activeComment.id===this.comment.id &&
  //       this.activeComment.type===this.activeCommentType.replying
  //     );
  // }
}
