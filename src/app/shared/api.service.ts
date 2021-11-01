import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http :HttpClient) { }
  postcustomer(data : any)
  {
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getcustomer()
  {
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updatetcustomer(data:any, Customerid:number)
  {
    return this.http.put<any>("http://localhost:3000/posts" + Customerid,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deletecustomer()
  {
    return this.http.delete<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
