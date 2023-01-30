import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isLoggedIn=false;
  constructor(
    private loginService:LoginService,

  ){}
  ngOnInit(): void {
    
    this.isLoggedIn=this.loginService.isLoggedIn();
    // this.user=this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe( 
      (data:any)=>{
        this.isLoggedIn=this.loginService.isLoggedIn();
        // this.user=this.loginService.getUser();
      }
    );
  }
  logout(){
    console.log("Logout CLicked")
    this.loginService.logout();

  }
}
