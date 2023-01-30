import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  token: string="";
  constructor(private loginService:LoginService){}
  intercept(
      req: HttpRequest<any>, 
      next: HttpHandler):
      Observable<HttpEvent<any>> {
      // throw new Error("Method not implemented.");
      let authReq=req;
      const token=this.loginService.getToken();
      console.log("MERA TOKEN "+token)
      if(token!=null){
          authReq=authReq.clone({setHeaders:{Authorization:`Bearer ${token}`}},
          );
      }
      return next.handle(authReq);
  } 
}