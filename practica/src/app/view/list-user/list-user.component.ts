import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListUsersService } from 'src/app/services/list-users.service';
import { ListUserBean } from 'src/app/model/list-user-bean';
import { UserBean } from 'src/app/model/user-bean';
import { UserDeleteService } from 'src/app/services/user-delete.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  public listUsers: ListUserBean;

  constructor(private listUsersService : ListUsersService, 
    private userDeleteService: UserDeleteService,
    private router:Router) { 

  }

  volver() {
    this.router.navigateByUrl("/wellcome");
  }

  ngOnInit(): void {

    console.log("Probando");

    this.listUsersService.listUsers().subscribe(data => {
      console.log(data);      

      let response:string;
      //let listUser:ListUserBean;

      response = JSON.stringify(data);
      console.log("-------POST-------->" + response);
      
      this.listUsers=JSON.parse(response);
      console.log("-------listUser-------->" + this.listUsers.total);

      localStorage.setItem("listUser", JSON.stringify(this.listUsers));

    });
  }


  
  public detail(i:number)
  {
    console.log("Detalle del id: " + i);
  }
  

  public delete(i:number)
  {

    this.userDeleteService.delete(i);

    console.log("Eliminación del id: " + i);
  }
  

  public update(i:number)
  {
    console.log("Actualización del id: " + i);
  }
  

  
  /*
  public getUsers() : UserBean[] 
  {
    return (this.listUser.data);
  }
  */

}
