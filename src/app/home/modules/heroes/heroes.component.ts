import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../shared/services/hero.service';
import { Router } from '@angular/router';
import { Hero } from '../../../shared/interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router, 
    private heroService: HeroService,
  ){}

  ngOnInit(): void {
    this.heroService.getAll().subscribe( response => this.heroes = response );
  }




}
