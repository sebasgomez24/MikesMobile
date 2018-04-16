import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from '../posts/post';
import { PostService } from '../posts/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass'],
  providers: [PostService]
})
export class PostListComponent implements OnInit, OnDestroy {

  private req:any
  blogPostList:[BlogPost]
  
  constructor(private _service:PostService) { }

  ngOnInit() {
    this.req = this._service.list().subscribe(data=>{
      this.blogPostList = data as [BlogPost];
    })

  }

  ngOnDestroy(){
    this.req.unsubscribe();
  }

}
