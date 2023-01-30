import { Component ,OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignupComponent  implements OnInit{
  constructor(
    private userService:UserService,
    private route:Router,
    private snak: MatSnackBar,
  ){}

  phone_maxLength=10
  phone_minLength=12
  public user={
    // username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    linkedinUrl:'',
    resumeUrl:'',
    dob:'',
    yearsOfExperience:0,
    gender:'M',
    aboutMe:''

  }
  ngOnInit(): void {
    this.snak.open(
      'All links, Resume or CV url must be public',
      'OK',
      {
        duration:3000,
        verticalPosition:'top'
      },
    )
  }

  formSubmit(){
    console.log(this.user)
    if(this.user.email=='' || this.user.email==null){
      // alert("UserName Required")
      this.snak.open("Email is Required" , 'Ok' ,{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right'
      });
      return ;
    }
    this.userService.addUser(this.user).subscribe( (data)=>{
      // alert("Success");   
      Swal.fire("Success", "Deails is Submitted Our team will contact you ASAP !!");
      this.snak.open("Success ", 'OK', {
        duration:3000,
      })
      this.route.navigate(["/login"]);
    },(error:any)=>{
      console.log(error)
      this.snak.open('Something went Wrong !! ', 'Ok',{
        duration:3000,
      })
      // alert("Something went Wrong");
    }
    
    );

  }


}
