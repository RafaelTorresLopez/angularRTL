import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListResourceBean } from 'src/app/model/list-resource-bean';
import { ListResourcesService } from 'src/app/services/list-resources.service';

@Component({
  selector: 'app-list-resource',
  templateUrl: './list-resource.component.html',
  styleUrls: ['./list-resource.component.css']
})
export class ListResourceComponent implements OnInit {


  public listResources: ListResourceBean;

  constructor(private listResurceService : ListResourcesService, 
    private router:Router) { 

  }



  volver() {
    this.router.navigateByUrl("/wellcome");
  }

  ngOnInit(): void {

    console.log("Probando");

    this.listResurceService.listResources().subscribe(data => {
      console.log(data);      

      let response:string;
      //let listUser:ListUserBean;

      response = JSON.stringify(data);
      console.log("-------POST-------->" + response);
      
      this.listResources=JSON.parse(response);
      console.log("-------listResources-------->" + this.listResources.total);

      localStorage.setItem("listResources", JSON.stringify(this.listResources));

    });

  }

}
