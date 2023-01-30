import { Component, OnInit,Input } from '@angular/core';
import { ShowBlogHomeService } from 'src/app/services/show-blog-home.service';

@Component({
  selector: 'app-home-blog-view',
  templateUrl: './home-blog-view.component.html',
  styleUrls: ['./home-blog-view.component.css']
})
export class HomeBlogViewComponent implements OnInit{
  @Input() blog:any;

  constructor(
    private showBlogService:ShowBlogHomeService,
  ){}
  ngOnInit(): void {
    this.blog=this.showBlogService.getBlog();
    this.showBlogService.dummyNameForShowBlogSubject$.subscribe(
      (data:any)=>{
          this.blog=data;
      },(erorr:any)=>{
        console.log("Something went wrong !! ");
      }
    )
  }
  updateLike(){
    console.log("Like Clicked !! ")
  }
  updateDislike(){
    console.log("Dislike Clicked")

  }

}
