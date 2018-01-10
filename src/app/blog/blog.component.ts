import { Component, OnInit } from '@angular/core';
import { MOCKBLOGPOSTS } from '../blog-posts';
import { BlogPost } from '../models/blogPost';
import { HttpClientService } from '../http-client-service/http-client.service';

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

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    console.log(this.httpClientService.cars);

  }

}
