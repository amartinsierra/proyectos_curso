import { Post } from '../../model/Post';
import { Comment } from '../../model/Comment';
import { TypicodeService } from './../../services/typicode-service';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-comments',
  imports: [FormsModule],
  templateUrl: './post-comments.html',
  styleUrl: './post-comments.css',
})
export class PostComments implements OnInit{
  posts=signal<Post[]>([]);
  commentsPost=signal<Comment[]>([]);
  postId=signal<string>("0");
  constructor(private service:TypicodeService){

  }
  ngOnInit(): void {
    this.service.getPosts().subscribe(data=>
      this.posts.set(data)
    );
  }

  commentsByPost():void{
    this.service.getCommentsByPost(parseInt(this.postId())).subscribe(data=>
      this.commentsPost.set(data)
    );
  }

}
