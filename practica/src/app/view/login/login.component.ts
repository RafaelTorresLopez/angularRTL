import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { RegisterBean } from 'src/app/model/register-bean';
import { RegisterService } from 'src/app/services/register.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mail:string;
  pass:string;

  loginService : LoginService;
  router:Router;

  constructor(ls : LoginService, r:Router) { 
    this.loginService=ls;
    this.router= r;
  }

  ngOnInit(): void {
  }

  login() {
    console.log("mail:" + this.mail + " pass:" + this.pass);

    let register:RegisterBean;
    register = new RegisterBean();
    register.email=this.mail;
    register.password=this.pass;
    

    this.loginService.login(register);

    this.router.navigateByUrl("/wellcome");

    
    
  }
    
    


}
