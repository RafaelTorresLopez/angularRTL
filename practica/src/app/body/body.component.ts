import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

   

  constructor(loginService : LoginService) { 
    loginService.login();
  }

  ngOnInit(): void {

    

  }

}
