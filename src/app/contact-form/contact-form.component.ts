import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client-service/http-client.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {

  public model = new Contact(
    "Joshy", 
    "Washles", 
    "joshy@washles.com", 
    "I love my wifey!"
  );

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
  }

  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    // this.getContacts();
  }

  postContact(): void {
    this.httpClientService.createContact(this.model).subscribe(
      data => { this.model = data }, 
      err => console.error(err)
    )
  }

   // getContacts(): void {
  //   this.httpClientService.getAllContacts().subscribe(
  //     data => { this.contacts = data }, 
  //     err => console.error(err)
  //   )
  // }

}
