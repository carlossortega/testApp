import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { GiphyService } from '../../../shared/services/giphy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giphys',
  templateUrl: './giphys.component.html',
  styleUrls: ['./giphys.component.scss']
})
export class GiphysComponent implements OnInit {
  type: string = 'gifs';
  @ViewChild('txt') txt!: ElementRef<HTMLInputElement>;
  term!: string;
  loading: boolean = false;

  constructor( 
    private giphyService: GiphyService
  ) {}

  get Data(){
    return this.giphyService.giphys;
  }

  get history(){
    return this.giphyService.history;
  }

  ngOnInit(): void {
    this.giphyService.getTreding(this.type);
  }
  
  radioGroup(event: string){
    this.type = event;
    if ( this.term == undefined || this.term.trim().length === 0 ){
      if( this.type === 'stickers' ){
        this.giphyService.getTreding(this.type);
      } else {
        this.giphyService.getTreding(this.type);
      }
    } else {
      if( this.type === 'stickers' ){
        this.giphyService.searchGiphys(this.type, this.term);
      } else {
        this.giphyService.searchGiphys(this.type, this.term);
      }
    }
  }

  search(){
    this.term = this.txt.nativeElement.value;
    if( this.term.trim().length > 0 ){
      this.loading = true;
      this.giphyService.searchGiphys(this.type, this.term);
      this.loading = false;
    }
  }

  clear(){
    this.term = '';
    this.txt.nativeElement.value = '';
  }

  historyClick(text: string){
    this.term = text;
    this.giphyService.searchGiphys(this.type, this.term);
  }

}
