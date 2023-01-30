import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs'
import { CommentInterface } from '../types/Comment';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http:HttpClient
  ) { }

  resource='http://localhost:3000/comments'

  getComments():Observable<CommentInterface[]>{
   return this.http.get<CommentInterface[]>(
     this.resource,
   )
  }
  createComment(text:string,parentId:null |string):Observable<CommentInterface>{
    return this.http.post<CommentInterface>(
      this.resource,
      {
        body:text,
        parentId,
        // should not be set here
        createdAt:new Date().toISOString(),
        userId:'user@gmail.com',
        username:'User',
      }
    )
  }

  updateComment(id:string,text:string |string):Observable<CommentInterface>{
    // console.log(this.resource+"/"+id)
    return this.http.patch<CommentInterface>(
      this.resource+"/"+id,

      {
        body:text,
      }
    )
  }
  deleteComment(id:string):Observable<{}>{
    return this.http.delete(
      this.resource+"/"+id
    )
  }
  
 }
 