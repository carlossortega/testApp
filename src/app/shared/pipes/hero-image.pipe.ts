import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Pipe({
    name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {
    transform( heroe: Hero ) {
        if( !heroe ){
            return `assets/no-image.png`
        } else if ( heroe.alt_img ) {
            return heroe.alt_img;
        } else {
            return `assets/heroes/${ heroe.id }.jpg`;
        }


    }
}