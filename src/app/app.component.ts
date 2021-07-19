import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router,NavigationEnd, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import {DataService} from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isLoggedIn$: Observable<boolean> | undefined;

  constructor(
    private router: Router,
    private logInState: DataService
  ) {}

  title = 'eMainter';
  show:boolean=false;


  ngOnInit(): void {

    this.isLoggedIn$ = this.logInState.isLoggedIn;
  }

  onLogout()
  {
    localStorage.setItem("LoggedIn","false");
    localStorage.setItem("UserName","");
    localStorage.setItem("Access","");
    this.logInState.changeLoggedIn(false);
  }


}
