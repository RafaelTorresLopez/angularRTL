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

    let page:number;

    page=1;

    console.log ("Llamando al servicio de users en regres.in...")

    return this.http.get('https://reqres.in/api/users?page=' + page);
  }


}
