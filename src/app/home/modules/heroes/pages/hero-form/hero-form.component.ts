import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../../../../../shared/services/hero.service';
import { Hero } from '../../../../../shared/interfaces/hero';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../../../../../shared/services/firebase.service';

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
    hero!: Hero;
    form!: FormGroup;
    create: boolean = false;
    publishers: string[] = ['DC Comics', 'Marvel Comics']

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private actRoute: ActivatedRoute,
        private heroService: HeroService,
        private firebaseService: FirebaseService,
    ){
        this.form = fb.group({
            id: [],
            superhero: [ ,Validators.minLength(5)],
            alter_ego: [ ,Validators.minLength(8)],
            first_appearance: [ ,Validators.minLength(7)],
            characters: [ ,Validators.minLength(7)],
            publisher: [],
            alt_img: [ ,Validators.minLength(20)],
        })
    }

    ngOnInit(): void {
        let id = this.actRoute.snapshot.paramMap.get('id');
        if( id !== null ){
            this.create = false;
            this.heroService.getById( id ).subscribe( resp => {
                this.hero = resp;
                this.form.controls['id'].setValue( this.hero.id );
                this.form.controls['superhero'].setValue( this.hero.superhero );
                this.form.controls['alter_ego'].setValue( this.hero.alter_ego );
                this.form.controls['first_appearance'].setValue( this.hero.first_appearance );
                this.form.controls['characters'].setValue( this.hero.characters );
                this.form.controls['publisher'].setValue( this.hero.publisher );
                if( this.hero.alt_img ){
                    this.form.controls['alt_img'].setValue( this.hero.alt_img );
                }
            })
        } else {
            this.create = true;
        }
    }

    onClick(){
        if( this.form.valid ){
            if( !this.create ){
                //Update
                const img: string = this.form.controls['alt_img'].value;
                const heroe: Hero = {
                    id: this.form.controls['id'].value,
                    superhero: this.form.controls['superhero'].value,
                    alter_ego: this.form.controls['alter_ego'].value,
                    first_appearance: this.form.controls['first_appearance'].value,
                    characters: this.form.controls['characters'].value,
                    publisher: this.form.controls['publisher'].value,
                }
                if( img !== null ){
                    heroe.alt_img = img;
                }
                this.heroService.put( heroe ).subscribe( hero => {
                    this.firebaseService.code('hero-updated');
                })
            } else {
                //Create
                const alt_img = this.form.controls['alt_img'].value;
                const img: string = 'assets/no-image.png';
                const heroe: Hero = {
                    superhero: this.form.controls['superhero'].value,
                    alter_ego: this.form.controls['alter_ego'].value,
                    first_appearance: this.form.controls['first_appearance'].value,
                    characters: this.form.controls['characters'].value,
                    publisher: this.form.controls['publisher'].value,
                }
                if ( alt_img ){
                    heroe.alt_img = alt_img;
                } else {
                    heroe.alt_img = img;
                }
                this.heroService.post(heroe).subscribe( hero => {
                    this.router.navigate(['app/menu/heroes/edit', hero.id ]);
                    this.firebaseService.code('hero-created');
                })
            }
        }
    }

    onDelete(){
        this.heroService.delete( this.hero ).subscribe( hero => {
            this.router.navigate(['app/menu/heroes/list']);
            this.firebaseService.code('hero-deleted');
        })
    }




}