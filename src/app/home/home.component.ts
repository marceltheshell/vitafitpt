import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {

    (function() {
      var po = document.createElement('script'), d ='https://api.ideafit.com';
      po.type = 'text/javascript'; po.async = true; po.id = 'idea-badge-script';
      po.setAttribute('data-domain', d);
      po.src = d + '/assets/badge.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    })();
  }
}
