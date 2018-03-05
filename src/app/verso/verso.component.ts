import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-verso',
  templateUrl: './verso.component.html',
  styleUrls: ['./verso.component.css']
})
export class VersoComponent implements OnInit {
	@Input() verso : Verso;
	


  constructor() { }

  ngOnInit() {
  }

}
