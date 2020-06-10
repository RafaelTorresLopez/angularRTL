import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListResourcesService {

  constructor(private http: HttpClient) {

  }


  public listResources() {

    let page:number;

    page=1;

    console.log ("Llamando al servicio de listResources...");

    return this.http.get('https://reqres.in/api/unknown');
  }

}
