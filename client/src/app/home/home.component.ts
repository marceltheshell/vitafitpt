import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// declare var jquery:any;
// declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      // $(function() {
      //   $('#main-slider.carousel').carousel({
      //     interval: 8000
      //   });
      // });

      $( '.centered' ).each(function( e ) {
        $(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
      });

      $(window).resize(function(){
        $( '.centered' ).each(function( e ) {
          $(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
        });
      });
    });
 }
}
