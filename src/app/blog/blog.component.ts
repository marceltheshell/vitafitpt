import { Component, OnInit } from '@angular/core';
// import { MOCKBLOGPOSTS } from '../blog-posts';
import { Blog } from '../models/blog';
import { HttpClientService } from '../http-client-service/http-client.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  public blogs: Blog[] = [
    {
      id: 1,
      title:"My First",
      content: "lorem ipsum bla",
      author: "Marcel",
      date: "2/20/81",
      views: 1
    },
    {
      id: 2,
      title:"My Second",
      content: "lorem ipsum bla",
      author: "Humberto",
      date: "9/99/81",
      views: 1
    }
  ]


  //////////// select stuff
  // mockBlogPosts = MOCKBLOGPOSTS;
  selectedBlogPost: Blog;
  onSelect = function(mockBlogPost: Blog): void {
    this.selectedBlogPost = mockBlogPost;
  }; 
  ////////////////select stuff

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    this.getBlogs();
  }

  getBlogs(): void {
    this.httpClientService.getAllBlogs().subscribe(
      data => { data },
      err => console.error(err)
    )
  }
}
