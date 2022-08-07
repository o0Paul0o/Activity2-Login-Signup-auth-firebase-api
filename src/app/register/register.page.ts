import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

 email:any;
 pass:any;

  constructor(private router:Router,private auth:AngularFireAuth) { }

  ngOnInit() {
  }

  reg(){

    this.email= ((document.getElementById("email") as HTMLInputElement).value);
    this.pass= ((document.getElementById("password") as HTMLInputElement).value);
  
this.auth.  
createUserWithEmailAndPassword(this.email, this.pass)
  .then(userCredential => {
    
    if(userCredential.user){
    
      window.alert("logged in");
      this.router.navigateByUrl('/login');

    }



  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert("errorMessage");
  });

    
  }
  back(){
    this.router.navigateByUrl('/login')
  }
}
