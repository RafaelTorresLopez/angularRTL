import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { RegisterBean } from '../model/register-bean';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

   

  constructor(loginService : LoginService) { 

      let register:RegisterBean;
      register = new RegisterBean();
      register.email="eve.holt@reqres.in";
      register.password="cityslicka";

    loginService.login(register);
  }

  ngOnInit(): void {

  }

}
