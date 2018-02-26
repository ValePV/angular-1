import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {
  @Input() id:number;
	@Input() mostrarVersos : boolean;
  @Output() onMostrar = new EventEmitter<any>();
  
	versos = [
 	'Cuando supe la noticia de que ya no me querías',
  	'hasta el perro de mi casa me miraba y se reía',
  	'los zapaticos me aprietan y las medias me dan calor',
  	'del cielo cayó una rosa y el viento se la llevó',
  	'p de pizza, p de pasta, pepperoni',
  	'yo sigo vacilando las penas olvidando'
 	];
  constructor() { }

  ngOnInit() {
  }
  onMostrarClick(){ 
    this.onMostrar.emit({
      mostrar: !this.mostrarVersos,
      id: this.id
    })
  }
}
