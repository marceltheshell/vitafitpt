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
    return this.http.get(API_URL + '/blogs/')
  }

  // public createContact(contact: Contact): Observable<Contact> {
  //   let body = JSON.stringify(contact);
  //   return this.http.post(API_URL + '/contacts/', body, httpOptions);
  // }

  // make routes for:
  // POST /contact
  // POst /blog
  // PUT /blog
  // Delete /blog

  // public getBlog(blogId: number): Observable<Blog> {
  //   return this.http.get(API_URL + '/blog/' + blogId);
  // }

  // public createBlog(blog: Blog): Observable<Blog> {
  //   let body = JSON.stringify(blog);
  //   return this.http.post(API_URL + '/blog/', body, httpOptions);
  // }

  // public updateBlog(blog: Blog): Observable<Blog> {
  //   let body = JSON.stringify(blog);
  //   return this.http.put(API_URL + '/blog/' + blog.id, body, httpOptions);
  // }

  // public deleteBlog(blog: Blog): Observable<Blog> {
  //   return this.http.delete(API_URL + '/blog/' + blog.id);
  // }

}


 

