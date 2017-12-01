import { Component, OnInit } from '@angular/core';
import { HeroFetchService } from '../hero-fetch.service.ts';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroFetchService.getHeroes()
  }

  constructor() { }

  ngOnInit() {
  }

}
