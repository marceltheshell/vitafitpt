import { Component, OnInit } from '@angular/core';
import { MOCKBLOGPOSTS } from '../blog-posts';
import { BlogPost } from '../models/blogPost';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  mockBlogPosts = MOCKBLOGPOSTS;

  selectedBlogPost: BlogPost;

  onSelect = function(mockBlogPost: BlogPost): void {
    this.selectedBlogPost = mockBlogPost;
  }; 

  constructor() {}

  ngOnInit() {}

}
