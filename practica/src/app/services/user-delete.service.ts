import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDeleteService {

  constructor(private http: HttpClient) {

  }

  public delete(id:number) {

    let result:string;

    console.log ("Llamando al servicio de login en regres.in...")

    this.http.delete('https://reqres.in/api/users/'+id).subscribe(data => {
      console.log("-------POST-------->" + data);      
    });  

  }
}
