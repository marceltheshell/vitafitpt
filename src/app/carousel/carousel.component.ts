import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';
import 'hammerjs';

@Component({
  selector: 'app-carousel',
  template: `
    <ngx-carousel
      [inputs]="carouselTile"
      (carouselLoad)="carouselTileLoad($event)">
 
            <ngx-tile NgxCarouselItem *ngFor="let Tile of carouselTileItems">
                <h1>{{Tile + 1}}</h1>
            </ngx-tile>
 
          <button NgxCarouselPrev class='leftRs'>&lt;</button>
          <button NgxCarouselNext class='rightRs'>&gt;</button>
    </ngx-carousel>
  `,
  styles: [`
 
    h1{
      min-height: 200px;
      background-color: #ccc;
      text-align: center;
      line-height: 200px;
    }
    .leftRs {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 50px;
        height: 50px;
        box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
        border-radius: 999px;
        left: 0;
    }
 
    .rightRs {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 50px;
        height: 50px;
        box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
        border-radius: 999px;
        right: 0;
    }
  `]
})

export class CarouselComponent implements OnInit {
  public carouselTileItems: Array<any>;

  public carouselTile: NgxCarousel;
 
  ngOnInit(){
    this.carouselTileItems = [ 
      '../../assets/images/images/slider/bg1.jpg', 
      '../../assets/images/images/slider/bg2.jpg'
    ];
 
    this.carouselTile = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            border: 2px solid rgba(0, 0, 0, 0.55);
            padding: 4px;
            margin: 0 3px;
            transition-timing-function: cubic-bezier(.17, .67, .83, .67);
            transition: .4s;
          }
          .ngxcarouselPoint li.active {
              background: #6b6b6b;
              transform: scale(1.2);
          }
        `
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }
 
  public carouselTileLoad(evt: any) {
 
    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }
 
  }
 
     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel

}
