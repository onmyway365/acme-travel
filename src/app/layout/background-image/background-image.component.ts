import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.css']
})
export class BackgroundImageComponent implements OnInit {
  imageSources = [];
  constructor() { }

  ngOnInit() {
    this.imageSources = [
      '../../../assets/images/paris.jpg',
      '../../../assets/images/NY.jpg',
      '../../../assets/images/Rome.jpg',
    ];
  }

}
