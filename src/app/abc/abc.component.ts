import { Component, OnInit } from '@angular/core';

import { Hero } from '../abc';
import { HeroService } from '../abc.service';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class HeroesComponent implements OnInit {
  abc: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.abc = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.abc.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.abc = this.abc.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}