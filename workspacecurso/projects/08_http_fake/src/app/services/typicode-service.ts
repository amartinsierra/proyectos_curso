import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';
import { Comment } from '../model/Comment';

@Injectable({
  providedIn: 'root',
})
export class TypicodeService {
  urlBase:string="https://jsonplaceholder.typicode.com/";
  constructor(private http:HttpClient){

  }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.urlBase+"posts");
  }
  getCommentsByPost(postId:number):Observable<Comment[]>{
    //return this.http.get<Comment[]>(`${this.urlBase}comments?postId=${postId}`);
    return this.http.get<Comment[]>(`${this.urlBase}comments`,{params:{postId:postId}});
  }
}
