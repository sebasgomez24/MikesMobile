import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.growSlideshow();
  }

  growSlideshow(){
    if(screen.width < 992){
      var slideshow = document.getElementById('slideshow');

      slideshow.classList.remove('container', 'mt-4');
      slideshow.classList.add('row');
    }
  }
}
