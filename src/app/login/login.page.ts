import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:any;
  pass:any;

  constructor(private router:Router,private auth:AngularFireAuth) { }

  ngOnInit() {
  }

log(){

  this.email= ((document.getElementById("email") as HTMLInputElement).value);
  this.pass= ((document.getElementById("password") as HTMLInputElement).value);

this.auth.  
signInWithEmailAndPassword(this.email, this.pass)
.then(userCredential => {
  
  if(userCredential.user){
  
    window.alert("Succesfully Logged in");
    this.router.navigateByUrl('/home');

  }



})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  window.alert("Access Denied");
});


}

move(){
  this.router.navigateByUrl('/reset');

}
sign(){
  this.router.navigateByUrl('/register')
}

}
