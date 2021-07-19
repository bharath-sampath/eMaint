import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder,Validators} from '@angular/forms';

export class employee {
  ecode:string="";
  fname:string="";
  lname:string="";
  active:boolean=true;
  email:string="";
  address:string="";
  action: any;
}


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: employee, private fb:FormBuilder) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  dialogForm = this.fb.group({
    ecode:['',Validators.required],
    fname:['',Validators.required],
    lname:['',Validators.required],
    email:['',Validators.required,'',Validators.email],
    address:['',Validators.required],
    active:['',Validators.required,]

  })

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
