import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  options: Option[];
  roles: any;
  userId: String;
  userName: String;

  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
    this.userId = "1";
    this.userName = "hey";

    this.getJSON().subscribe(data => {
      this.roles = data;
      console.log(this.roles);
      this.roles.forEach(role => {
        if (role.id == 1) {
          this.options = role.options;
        }
      });
    }, error => console.log(error));
  }

  public getJSON(): Observable<any> {
    return this._http.get("/assets/json/navbar.json")
      .map((res: any) => res.json());

  }

  logout(): void {
     swal(
        'Invalid Fields!',
        'Your Card Reference or Amount is Empty',
        'error'
      )
   // this._router.navigateByUrl('/login');
  }

}

interface Option {
  title: String;
  path: String;
}
