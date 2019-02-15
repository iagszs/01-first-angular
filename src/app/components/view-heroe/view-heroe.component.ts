import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-heroe',
  templateUrl: './view-heroe.component.html',
  styleUrls: ['./view-heroe.component.css']
})
export class ViewHeroeComponent implements OnInit {

  heroes: any;
  constructor(private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute) { }
    
  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      console.log(params['nombre']);
      this.heroes = this._heroesService.buscarHeroes(params['nombre']);
      console.log(this.heroes);
      
    })
  }
}
