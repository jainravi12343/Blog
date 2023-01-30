import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url="http://localhost:8080/blog/";
  localhost="http://localhost:8080/"
  

  constructor(
    private http:HttpClient
  ){}

  createBlog(blog:any):Observable<any>{
      return this.http.post(
        this.url,
        blog,
      )
    }
    
  getAllBlogs():Observable<any>{
      return this.http.get(
        this.url
      )
    }
  getBlogsForHome():Observable<any>{
    return this.http.get(
      this.url+"likes"
    )
  }
  getBlogsByLanguage(lang:string){
    return this.http.get(
      this.url+"getByLanguage/"+lang
    )
  }
  
  getBlogsBySearch(search:string){
    return this.http.get(
      this.url+"getBySearch/"+search
    )
  }

  getCurrentUser(){
    return this.http.get(
      this.localhost+'current-user'
    )
  }

  getAuthor(owner:string){
    return this.http.get(
      this.url+'getOwnerDetails/'+owner,
    )
  }
  login(user:any){
    console.log("user"+user)
   return this.http.post(
      this.localhost+"generate-token",
      user
    )
  }
  getAllBlogsByAuthor(){
    return this.http.get(
      this.url+'getAllAuthorBlogs',
    )
  }


  
}
