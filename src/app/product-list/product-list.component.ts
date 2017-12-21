import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  test : number[] = [1,4,5,4,6,8,6,0,34,3,3,3,3,3,3,3,3,3,3,3,3,33];
  img : string[] = [];
  ads : any;

  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
    this.getJSON().subscribe(data => {
      this.ads = data;
      console.log(this.ads);
    }, error => console.log(error));
  }

  public getJSON(): Observable<any> {
    return this._http.get("/assets/json/ads.json")
      .map((res: any) => res.json());
  }

  

}
