import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatusSubject=new Subject<any>
  constructor() { }

  getToken(){
    return localStorage.getItem('token');
  }
  
  isLoggedIn(){
    if(localStorage.getItem("token")){
      return true;
    }
    return false;
  }

  loginUser(token:any){
    token=token['response']
    localStorage.setItem("token",token);
    this.loginStatusSubject.next(true)
  }

  setRole(role:any){
    localStorage.setItem("role",role);
  }
  getRole(){
    return localStorage.getItem("role");
  }

  logout(){
    localStorage.clear();
    this.loginStatusSubject.next(false)
  }
}
