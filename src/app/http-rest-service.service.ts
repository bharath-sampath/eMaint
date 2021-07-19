import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class employee {
  _id:string ="";
  ecode:string="";
  fname:string="";
  lname:string="";
  active:boolean=true;
  email:string="";
  address:string="";
  action:string="";
}

export class user {
  id:string="";
  username:string="";
  password:string="";
  active:boolean=false;
  access:object=[{}];
  }


@Injectable({
  providedIn: 'root'
})
export class HttpRestServiceService {

  endPoint = 'https://employeemainterdb01-edf3.restdb.io/rest';

  constructor(private httpClient: HttpClient) {

   }

headers = new HttpHeaders().set('apikey', '60e36f5dc60cf31676a22b2c');

authUser(user:string) {
  let params = new HttpParams();
  params = params.append ('q','{"username":"'+user+'"}')
  return this.httpClient.get<user>(this.endPoint + '/emusers',{headers:this.headers,params:params})
  .pipe(
    retry(1),
    catchError(this.httpError)
  )

}

getemployees() : Observable<employee>{
  return this.httpClient.get<employee>(this.endPoint + '/employees',{headers:this.headers})
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
}

deleteemployee(result:employee){
  return this.httpClient.delete<employee>(this.endPoint+'/employees'+'/'+result._id,{headers:this.headers})
  .pipe(retry(1),catchError(this.httpError)
  )
}

updateemployee(result:employee) {
  return this.httpClient.put<employee>(this.endPoint+'/employees'+'/'+result._id,result,{headers:this.headers})
  .pipe(retry(1),catchError(this.httpError)
  )
}

createemployee(result:employee){
  console.log(JSON.stringify(result));
  return this.httpClient.post<employee>(this.endPoint+'/employees',result,{headers:this.headers})
  .pipe(retry(1),catchError(this.httpError)
  )
}

httpError(error:any) {
  let msg = '';
  if(error.error instanceof ErrorEvent) {
    // client side error
    msg = error.error.message;
  } else {
    // server side error
    msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(msg);
  return throwError(msg);
}

}
