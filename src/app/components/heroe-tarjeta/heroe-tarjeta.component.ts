import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  //Esto quiere decir que esta variable heroe puede venir de fuera.
  //Si no viene ningún argumento de fuera tendria el valor que yo le inicialice

  @Input() heroe: any = {};
  @Input() indice: number;
  //El nombre que quiero que el padre este escuchando
  @Output() heroeSeleccionado: EventEmitter<number>;

  //De esta manera se inicializa este EventEmitter
  constructor( private _router: Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    // console.log(this.indice);
    // this._router.navigate(['/heroe', this.indice]);
    this.heroeSeleccionado.emit( this.indice);
  }

}
