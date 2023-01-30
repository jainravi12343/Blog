import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowBlogHomeService {
  blog:any;
  private showBlogSubject=new Subject<any>();
  dummyNameForShowBlogSubject$=this.showBlogSubject.asObservable();
  constructor() {}
  setBlog(blog:any){
    this.blog=blog;
    this.showBlogSubject.next(blog);
  }
  getBlog(){
    return this.blog;
  }
}
