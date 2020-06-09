import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListUserBean } from '../model/list-user-bean';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {



  constructor(private http: HttpClient) {

  }


  public listUsers() {

    let result:string;

    console.log ("Llamando al servicio de users en regres.in...")

    this.http.get('https://reqres.in/api/users?page=1').subscribe(data => {
      console.log(data);      

      let response:string;
      let listUser:ListUserBean;

      response = JSON.stringify(data);
      console.log("-------POST-------->" + response);
      
      listUser=JSON.parse(response);
      console.log("-------listUser-------->" + listUser.total);

      localStorage.setItem("listUser", JSON.stringify(listUser));

    })
  }


}
