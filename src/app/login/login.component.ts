import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {HttpRestServiceService,user} from '../http-rest-service.service'
import { NgxSpinnerService } from "ngx-spinner";
import {ToastrService} from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import {DataService} from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  logFlag:boolean=false;
  user:any=[];
  constructor(private fb: FormBuilder,
    public userAuth:HttpRestServiceService,
    private SpinnerService: NgxSpinnerService,
    private toastr:ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private loginState: DataService) { }

  loginForm = this.fb.group({
    userName:['',Validators.required],
    passWord:['',Validators.required]
  }
  )


  onSubmit(){
    this.SpinnerService.show();
    return this.userAuth.authUser(this.loginForm.get('userName')?.value).subscribe((data:{}) => {
      this.SpinnerService.hide();

      if (Object.keys(data).length===0) {
        this.toastr.error("Username does not exist!");
        this.loginForm.reset;
      }
      else
      {
        this.user=data;
        if (this.user[0].password != this.loginForm.get('passWord')?.value)
        {

          this.toastr.error("Invalid password! Please try again");
          this.loginForm.reset();
        }
        else
        {
          if (!this.user[0].active){

          this.toastr.error("User in-active! Please contact admin!");
          this.loginForm.reset();
        }
        else
       {
          this.logFlag=true;

          localStorage.setItem("UserName",this.user[0].username);
          localStorage.setItem("Access",this.user[0].access);
          this.loginState.changeLoggedIn(true);
          this.router.navigate(['/home']);
        }
      }
    }})
  }


}
