import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    })
  }


}
