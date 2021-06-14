import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Posts } from "./post.model";
import {catchError, map} from 'rxjs/operators'
import { throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class HttpService{

    constructor(private http:HttpClient){}
    createPosts(post:Posts){
        this.http.post<{name:string}>('https://ng-complete-guide-a9a51-default-rtdb.firebaseio.com/posts.json',post).subscribe(responseData =>{
      console.log(responseData)
    });
    }

    fetchPost(){
       return this.http.get<{[key:string]:Posts}>('https://ng-complete-guide-a9a51-default-rtdb.firebaseio.com/posts.json',{
         headers: new HttpHeaders({
           "Custom_Header": 'hello'
         })
       }).
         pipe(map((responseData)=>{
      const response =[]
      
        for(let key in responseData){
          if(responseData.hasOwnProperty(key)){
          response.push({...responseData[key],id:key})
        }
       
      }
      return response
    }),catchError(error=>{
      return throwError(error)
    }))
    }

    deletePosts(){
        this.http.delete('https://ng-complete-guide-a9a51-default-rtdb.firebaseio.com/posts.json').subscribe((response)=>console.log(response));
    }
}