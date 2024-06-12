import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/shared/services/marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(
    private marvelService: MarvelService
  ){}

  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe( resp => {
      console.log(resp.data.results)
    })
  }
}
