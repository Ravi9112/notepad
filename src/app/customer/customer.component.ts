import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { customerModel } from './customer.model';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
  formValue !:FormGroup;
  customerModelObj : customerModel = new customerModel();
  customerData !:any;
  constructor(private formbuilder:FormBuilder ,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      Customerid : [''],
      Name : [''],
      Mobile : [''],
      Email : [''],
      Gender : [''],
      Place : ['']
    })
    this.getAllCustomer();
  }
  postcustomerDetails(){
    this.customerModelObj.customerid=this.formValue.value.customerid;
    this.customerModelObj.Name=this.formValue.value.Name;
    this.customerModelObj.Mobile=this.formValue.value.Mobile;
    this.customerModelObj.Email=this.formValue.value.Email;
    this.customerModelObj.Gender=this.formValue.value.Gender;
    this.customerModelObj.Place=this.formValue.value.Place;

    this.api.postcustomer(this.customerModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("successful")
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllCustomer();
    },
    err=>{
      alert("someting went wrong");
    })
   }
   getAllCustomer(){
     this.api.getcustomer()
     .subscribe(res=>{
       this.customerData = res;
     })

   }
   deletecustomer(row:any){
    this.api.deletecustomer()
    .subscribe(res=>{
      alert("employ deleted")
    })

  }
}
