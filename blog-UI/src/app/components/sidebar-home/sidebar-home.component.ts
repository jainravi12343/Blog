import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowBlogHomeService } from 'src/app/services/show-blog-home.service';

@Component({
  selector: 'app-sidebar-home',
  templateUrl: './sidebar-home.component.html',
  styleUrls: ['./sidebar-home.component.css']
})
export class SidebarHomeComponent implements OnInit{
  
  @Input() blog:any;
  
  constructor(
    private router:Router,
    private showBlogService:ShowBlogHomeService
  ){}
  ngOnInit(): void {
  }

  sendBlog(){
    console.log("clicked")
    console.log(this.blog)
    this.showBlogService.setBlog(this.blog);
  }
}
