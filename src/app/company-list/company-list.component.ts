import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies : any[];
  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
    this.getJSON().subscribe(data => {
      this.companies = data;
      console.log(this.companies);
    }, error => console.log(error));
  }

   public getJSON(): Observable<any> {
    return this._http.get("/assets/json/company.json")
      .map((res: any) => res.json());
  }

}
