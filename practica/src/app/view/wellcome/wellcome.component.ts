import { Component, OnInit } from '@angular/core';
import { ListUsersService } from 'src/app/services/list-users.service';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

  constructor(private listUsersService : ListUsersService) { }

  ngOnInit(): void {
  }
  
  listUsers() {
    this.listUsersService.listUsers();
  }

  listResources() {

  }



}
