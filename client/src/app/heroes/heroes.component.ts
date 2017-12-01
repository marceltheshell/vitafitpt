import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  person = {
    name: "", 
    type: ""
  }

  // selectedHero: Hero;

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  heroes: Hero[] = HEROES;

  constructor() {}

  ngOnInit() {

  }

}
