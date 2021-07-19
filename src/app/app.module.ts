import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import {HttpRestServiceService} from './http-rest-service.service';
import {AuthGateServiceService} from './auth-gate-service.service';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ToastrModule} from 'ngx-toastr'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-center'
    }),
     ],
  providers: [HttpRestServiceService, AuthGateServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
