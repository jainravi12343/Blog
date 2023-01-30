import { Component ,Input,OnInit} from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-about-author',
  templateUrl: './about-author.component.html',
  styleUrls: ['./about-author.component.css']
})
export class AboutAuthorComponent  implements OnInit{

  author=''
  linkedin=''
  aboutMe=''
  name=''
  
  @Input() owner='ravi@gmail.com';
  constructor(
    private blogService:BlogService,
  ){}
  ngOnInit(): void {
    this.blogService.getAuthor(this.owner).subscribe(
      (data:any)=>{
        console.log(data);
        this.name=data['firstName']+' '+data['lastName'];
        this.linkedin=data['linkedinUrl']
        this.aboutMe=data['aboutMe'];
        this.author=data['email']
      },(error)=>{
        console.log(error);
      }
    );
  }
}
