import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  constructor() { }
  Data:any={}
  readBlog:any={};
  public dataSub=new Subject<any>();
  // readBlog$=this.current_readBlog.asObservable();
  currentData=this.dataSub.asObservable();
  setReadBlog(blog:any){
    this.readBlog=blog
    this.dataSub.next(blog);
    // this.current_readBlog.next(blog);
    // this.readBlog.next(blog);
    // console.log(blog)
  }
  getBlog(){
    let res:any={};
    this.currentData.subscribe(
      (data:any)=>{
        this.Data=data;
      }
    );
    return this.Data;
    return this.readBlog;
  }

}
