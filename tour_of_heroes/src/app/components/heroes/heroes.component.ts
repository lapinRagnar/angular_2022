import { MessageService } from './../../services/message.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = []

  

  constructor(
    private heroService: HeroService, 
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

    this.getHeroes()

  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
  
  // onSelect(hero: Hero): void{
  //   this.messageService.add(` HeroesComponent: selected hero id=${hero.id} `)
  // }



}
