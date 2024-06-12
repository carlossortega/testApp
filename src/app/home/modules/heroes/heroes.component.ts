import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HeroService } from '../../../shared/services/hero.service';
import { Router } from '@angular/router';
import { Hero } from '../../../shared/interfaces/hero';
import { Type } from '../../../shared/interfaces/giphy';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  suggestions: Hero[] = [];
  heroSelected: Hero | undefined;
  showHero: boolean = false;
  @ViewChild('termino') termino!: ElementRef<HTMLInputElement>;

  constructor(
    private router: Router, 
    private heroService: HeroService,
  ){}

  ngOnInit(): void {
    this.heroService.getAll().subscribe( response => this.heroes = response );
  }

  clear(){
    this.termino.nativeElement.value = '';
    this.heroSelected = undefined;
    this.showHero = false;
  }

  searchHeroes(){
    const term = this.termino.nativeElement.value;
    this.heroService.getSuggestions(term).subscribe( resp => {
      this.suggestions = resp;
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    if( !event.option.value ){
      this.heroSelected = undefined;
      return;
    }
    
    const hero: Hero = event.option.value;
    this.termino.nativeElement.value = hero.superhero;
    this.heroService.getById(hero.id!).subscribe( resp => {
      this.heroSelected = resp;
      this.showHero = true;
    })
  }




}
