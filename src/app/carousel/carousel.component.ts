import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

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

  constructor() { }

  ngOnInit() {
    this.carouselTileItems = [0, 1, 2, 3, 4, 5];
 
    this.carouselTile = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      animation: 'lazy',
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
    if (len <= 5) {
      for (let i = len; i < len + 2; i++) {
        this.carouselTileItems.push(i);
      }
    }
 
  }

}
