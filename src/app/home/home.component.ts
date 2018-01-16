import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client-service/http-client.service';
import { Contact } from '../models/contact';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public contacts;

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {

    $(document).ready(function(){
      $( '.centered' ).each(function( e ) {
        $(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
      });

      $(window).resize(function(){
        $( '.centered' ).each(function( e ) {
          $(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
        });
      });
    });

    this.getContacts();
  }

  getContacts(): void {
    this.httpClientService.getAllContacts().subscribe(
      data => { this.contacts = data }, 
      err => console.error(err)
    )
  }
}
