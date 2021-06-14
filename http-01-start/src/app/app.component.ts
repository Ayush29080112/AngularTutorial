import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Posts } from './post.model';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts:Posts[] = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient, private httpService: HttpService) {}

  ngOnInit() {
    this.isFetching = true;
    this.httpService.fetchPost().subscribe((post)=>{
      this.loadedPosts=post;
      this.isFetching=false;
    },error=>{
      this.isFetching=false;
      this.error = error.error.error;
      
      console.log(error)
    })
  }

  onCreatePost(postData: Posts) {
    this.httpService.createPosts(postData)
  }

  onFetchPosts() {
    this.isFetching = true;
    this.httpService.fetchPost().subscribe(post=>{
      this.loadedPosts=post;
      this.isFetching=false;
    },error=>{
      this.isFetching=false;
      this.error = error.message
    })
  }

  onClearPosts() {
    this.httpService.deletePosts()
  }
  
}
