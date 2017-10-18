import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universal-card',
  templateUrl: './universal-card.component.html',
  styleUrls: ['./universal-card.component.css']
})
export class UniversalCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doSomething() {
    console.log('You clicked me!!!');
  }

}
