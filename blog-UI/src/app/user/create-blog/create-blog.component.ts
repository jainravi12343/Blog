import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit{

  title='ravi'

  blog={
    title:'',
    description:'',
    category:'',
    languages:'',
    content:'',
    footer:'',
  }
  constructor(
    private snackbar:MatSnackBar,
    private blogService:BlogService,
    
  ){}
  ngOnInit(): void {
    
  }


  formSubmit(){
    console.log("Form Submitted")
    if(this.blog.title==null || this.blog.title==undefined ||  this.blog.title.trim()==''){
      Swal.fire({
        title: 'Error!',
        text: 'Title Cannot be null',
        icon: 'error',
        confirmButtonText: 'OKAY'
      })
      return ;
    }
      this.blogService.createBlog(this.blog).subscribe(
        (data:any)=>{
          console.log(data)
          Swal.fire(
            {
              title:'success',
              text:'Blog Successfully Created',
              icon:'success',
              confirmButtonText:"OKAY",
            }
          )
        },(error:any)=>{
          Swal.fire(
            {
              title:'Error !! ',
              text:'Sorry Something Went wrong!!',
              icon:'error',
              confirmButtonText:"OKAY",
            }
          )
        }


      )
    }
  }
