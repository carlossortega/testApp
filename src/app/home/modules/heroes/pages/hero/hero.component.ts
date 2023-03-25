import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroService } from '../../../../../shared/services/hero.service';
import { Hero } from '../../../../../shared/interfaces/hero';


@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    hero!: Hero;

    constructor( 
        private actRoute: ActivatedRoute,
        private heroService: HeroService,
    ){}

    ngOnInit(): void {
        this.actRoute.params
        .pipe(
            switchMap( ({ id }) => this.heroService.getById(id) )
        ).subscribe( resp => this.hero = resp );
    }
}