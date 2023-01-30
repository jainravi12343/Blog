import { Component, Input, OnInit,Output, ViewChild } from '@angular/core';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit{
  
  // @Input() blog:any={};
  blog:any={}
  @Output() owner=''
  title=''
  name:any;
  constructor(
    private sharing:SharingService,

  ){}
  ngOnInit(): void {
    // this.sharing.currentData.subscribe(
    //   (data:any)=>{
    //     this.name=data;

    //     this.blog=data;
    //     console.log(this.blog)
    //   }
    // )
    this.blog=this.sharing.getBlog();
    // this.sharing.readBlog$.subscribe(
    //   (data:any)=>{
    //     this.blog=data;
    //     console.log(this.blog)
    //   }
    // )
    // this.blog="Ravi Jain";
    
    // this.sharing.readBlog$.subscribe(
    //   (data:any)=>{
    //     this.blog=data;
    //     this. title=data['title']
       
    //   },(error:any)=>{
    //     console.log("Error")

    //   }
    //   )
    this.owner=this.blog.owner;
  }


  updateLike(){
    console.log("Like Clicked");
  }
  updateDislike(){
    console.log("Like Clicked")

  }
}
