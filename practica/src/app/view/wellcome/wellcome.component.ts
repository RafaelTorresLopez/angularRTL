import { Component, OnInit } from '@angular/core';
import { ListUsersService } from 'src/app/services/list-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

  constructor(private listUsersService : ListUsersService,  private router:Router) { 

  }

  ngOnInit(): void {
  }
  
  listUsers() {
    this.listUsersService.listUsers();

    this.router.navigateByUrl("/listUsers");

  }

  listResources() {
    this.router.navigateByUrl("/listResources");
  }



}
