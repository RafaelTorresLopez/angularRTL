import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-resource',
  templateUrl: './list-resource.component.html',
  styleUrls: ['./list-resource.component.css']
})
export class ListResourceComponent implements OnInit {

  constructor(private router:Router) { 

  }


  volver() {
    this.router.navigateByUrl("/wellcome");
  }

  ngOnInit(): void {
  }

}
