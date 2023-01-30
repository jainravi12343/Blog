import { Component, OnInit, Output } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Output() listOfBlogs:any[]=[];
  isLoggedIn:boolean=false;
  constructor(
    private blogService:BlogService
  ){}
  user="user@gmail.com"
  ngOnInit(): void {
    this.blogService.getBlogsForHome().subscribe(
      (data:any)=>{
        this.listOfBlogs=data;
      },(error:any)=>{
        console.log(error);
      }
    )
  }

}
