import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Router } from '@angular/router'
@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  email:any;
  router: any;

  constructor(private auth:AngularFireAuth) { }

  ngOnInit() {
  }


  reset(){
     this.email=((document.getElementById("email")as HTMLInputElement).value);

     this.auth.  
     sendPasswordResetEmail(this.email)
  .then(userCredential => {
    
    
      window.alert("Reset email has been set this email :" +this.email);


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert("errorMessage");
  });

  }
  Bt(){
    this.router.navigateByUrl('/login')
  }


}
