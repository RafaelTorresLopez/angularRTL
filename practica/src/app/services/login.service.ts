import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }


  public login(): void {
    
    console.log ("Llamando al servicio de login en regres.in...")
    
    let body:String = "{\"email\": \"eve.holt@reqres.in\", \"password\": \"cityslicka\" }";

    

    this.http.post('https://reqres.in/api/login', body).subscribe(data => {console.log("-------POST-------->" + JSON.stringify(data))});

  }  


}
