import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client-service/http-client.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public contacts; 

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.httpClientService.getAllContacts().subscribe(
      data => { this.contacts = data }, 
      err => console.error(err)
    )
  }

}
