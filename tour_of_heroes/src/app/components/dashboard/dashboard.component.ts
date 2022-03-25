import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/interfaces/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = []

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => heroes.slice(1, 5))
  }

}
