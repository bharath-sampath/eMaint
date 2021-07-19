import { Component, OnInit } from '@angular/core';
import {HttpRestServiceService} from '../http-rest-service.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:any = [];
  constructor(public HttpRestService: HttpRestServiceService,
    private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.fetchEmployees();
    //this.deleteemployee('60e34ed205df171f0000cf26');
    // this.createemployee(
    //   `{"ecode": "456","lname": "Omar","address": "home street","fname": "Shariff","active": true,"email": "testerf@tester.com"}`
    // );
    //this.updateemployee('60e3482a05df171f0000ce84',`{"ecode": "456","lname": "Omar","address": "home street","fname": "Shariff","active": true,"email": "testerf@tester.com"}`);
  }
  fetchEmployees(){
    this.SpinnerService.show();
    return this.HttpRestService.getemployees().subscribe((data: {}) => {
      this.employees=data;
      this.SpinnerService.hide();
    })
  }
  deleteemployee(id:string){
    return this.HttpRestService.deleteemployee(id).subscribe((res)=>{
      this.fetchEmployees();
    })
  }
  updateemployee(id:string,employee:string){
    return this.HttpRestService.updateemployee(id,employee).subscribe((res)=>{
      this.fetchEmployees();
    })
  }
  createemployee(employee:string){

    return this.HttpRestService.createemployee(employee).subscribe((res)=>{
      this.fetchEmployees();
    })
  }

}
