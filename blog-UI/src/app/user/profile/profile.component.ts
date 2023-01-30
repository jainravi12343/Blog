import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BlogService } from 'src/app/services/blog.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user :any={};
  constructor(
    private blogService:BlogService,
    private snack:MatSnackBar
    
  ){}
  ngOnInit(): void {
    // this.user=this.loginService.getUser();
    this.blogService.getCurrentUser().subscribe(
      (data:any) => {
        this.user=data;
      },(error) =>{
        console.log(error);
        this.snack.open("SOME ERROR OCCURED !! ", "OK", 
          {duration: 5000}
        )
      }
    );
  }
}
