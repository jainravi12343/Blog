import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-protoview-blog',
  templateUrl: './protoview-blog.component.html',
  styleUrls: ['./protoview-blog.component.css']
})
export class ProtoviewBlogComponent implements OnInit{
  @Input() blog:any={}

  constructor(
    private router:Router,
    private sharing:SharingService,
  ){}
  ngOnInit(): void {
  }
  ReadArticle(){
    console.log("read")
    // this.sharing.current_readBlog.next(this.blog);
    this.sharing.setReadBlog(this.blog);
  }

}
