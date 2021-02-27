import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit(): void {
  }

  userInfo = {
    email:"",
    password:""
  }
  userInfoValidator = {
    email:false,
    password:false
  }
  registrar(){
    if(this.userInfo.email ===""){
      console.log("Email Empty");
      this.userInfoValidator.email = false;
    }else{
      this.userInfoValidator.email = true;
    }
    if(this.userInfo.password === ""){
      console.log("password empty");
      this.userInfoValidator.password = false;
    }else{
      this.userInfoValidator.password = true;
      this.Router.navigate(['/dashboard/'+this.userInfo.email]);
    }
    console.log("el boton esta funcionando");
    if(this.userInfo.password !== "" && this.userInfo.email !== ""){
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    }

  }
}
