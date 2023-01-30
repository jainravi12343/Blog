import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  user={
    email:'',
    password:''
  }
  constructor(
    private blogService:BlogService,
    private loginService:LoginService,
    private snack:MatSnackBar,
    private router:Router
    ){}

  ngOnInit(): void {
    this.blogService.getCurrentUser().subscribe(
      (data:any)=>{
        if(data!=null && data!=undefined){
          this.router.navigate(["/user-dashboard"]);
        }
      },(error:any)=>{
        this.loginService.logout();
        this.snack.open("Please login First !! ","OK" , {
          duration:3000,
          verticalPosition:'top'
        })
        console.log("Some Error")
      }      
    )
   }

  formSubmit(){
    this.blogService.login(this.user).subscribe(
      (response:any)=>{
        console.log("LOGIN SUCCESSFULLY");
        console.log(response);
        this.loginService.loginUser(response);
        this.blogService.getCurrentUser().subscribe(
          (user:any)=>{
            this.loginService.setRole(user.role);
            if(user.role=="NORMAL"){
              this.router.navigate(['/user-dashboard'])
              this.loginService.loginStatusSubject.next(true);
            }else if(user.role=="ADMIN"){
              this.router.navigate(['/']);
              this.loginService.loginStatusSubject.next(true);
            }else{
              this.loginService.loginStatusSubject.next(false);
              this.loginService.logout();
            }
          },(error:any)=>{
            alert("Something went wrong !!")
          }
        )
      },(error:any)=>{
        alert(" ID PASSWORD NOT MATCHED OR NOT EXIST")
      }
    )
  }
}
