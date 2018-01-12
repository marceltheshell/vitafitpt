import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { BlogPost } from '../models/blogPost';
import { Observable } from 'rxjs/Rx';

const API_URL = environment.apiUrl;

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class HttpClientService {


  constructor(private http: HttpClient) {}


  public getAllBlogs(): any {
    return this.http.get(API_URL + '/blog/')
  }

  public getBlog(blogId: number): Observable<Blog> {
    this.http.get(API_URL + '/blog/' + blogId).subscribe(data => {
      console.log("the data is" + data);
    });
  }

  public createBlog(blog: Blog): Observable<Blog> {
    this.http.post(API_URL + '/blog/' + blogId).subscribe(data => {
      console.log("the data is" + data);
    });
    // will use this.http.post()
  }

  public updateBlog(blog: Blog): Observable<Blog> {
    // will use this.http.put()
  }

  public deleteBlog(blog: Blog): Observable<Blog> {
    // will use this.http.delete()
  }



}


 

