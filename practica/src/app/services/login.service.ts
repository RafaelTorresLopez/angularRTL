import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '../model/token';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  public login() {

    let result:string;

    console.log ("Llamando al servicio de login en regres.in...")

    let body:string = "{\"email\": \"eve.holt@reqres.in\", \"password\": \"cityslicka\" }";

    this.http.post('https://reqres.in/api/login', JSON.parse(body)).subscribe(data => {
      let response:string;
      let myToken:Token;
      response = JSON.stringify(data);
      console.log("-------POST-------->" + response);
      myToken=JSON.parse(response);
      console.log("-------myToken-------->" + myToken.token);

      localStorage.setItem("token", JSON.stringify(myToken));
      
    });

  }

/*  
  public  login(): string {
        
    let myToken:Token;
    myToken= new Token();

    console.log ("Llamando al servicio de login en regres.in...");

    let body:string = "{\"email\": \"eve.holt@reqres.in\", \"password\": \"cityslicka\" }";

    this.http.post('https://reqres.in/api/login', JSON.parse(body)).subscribe(data =>{console.debug("He obtenido la respuesta:" + JSON.stringify(data)); myToken = JSON.parse(JSON.stringify(data));  }) ;   

    console.debug("He obtenido el Token:" + myToken.token);

    return myToken.token;

  }  
*/

}
