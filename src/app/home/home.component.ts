import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: [
    './styles/glh.css'
  ]
})

export class HomeComponent implements OnInit {
  public message: string;

  constructor() {}

  ngOnInit() {
    this.message = 'Hello';
  }
}