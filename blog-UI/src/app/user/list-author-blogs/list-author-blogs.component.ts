import { Component, OnInit,Input } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-list-author-blogs',
  templateUrl: './list-author-blogs.component.html',
  styleUrls: ['./list-author-blogs.component.css']
})
export class ListAuthorBlogsComponent implements OnInit{
  
  blogs:any[]=[]
  email:string='';
  
  constructor(
    private blogService:BlogService
  ){}

  ngOnInit(): void {
    this.blogService.getAllBlogsByAuthor().subscribe(
      (data:any)=>{
        this.blogs=data;
      },(error)=>{
        console.log("Error Occcured in fetching blogs for user !! ");
      }
    )
  }
}
