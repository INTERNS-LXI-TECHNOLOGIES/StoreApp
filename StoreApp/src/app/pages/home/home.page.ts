import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  products = [
    {
      name:'chilly powder',
      price:'  100'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
