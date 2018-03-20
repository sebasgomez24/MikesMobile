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
    stateManager.init();
  }

  growSlideshow(){
    if(screen.width < 992){
      var slideshow = document.getElementById('slideshow');

      slideshow.classList.remove('container', 'mt-3');
      slideshow.classList.add('row');
    }
  }
}


/* TRYING OUT DIFFERENT WAYS TO HAVE RESPONSIVE JAVASCRIPT */

var stateManager = (function () {
  var state = null;
  
  var resizePage = function () {
    if (screen.width < 768) {
      if (state !== "mobile") { 
        displayMobile(); 
      }
      resizeMobile();
    }
    else {
      if (state !== "desktop") { 
        displayDesktop(); 
      }
      resizeDesktop();
    }
  }; 
  var displayMobile = function () {
    state = "mobile";
    console.log("enter mobile");
  };
  var displayDesktop = function () {
    state = "desktop";
    console.log("enter desktop");
  };
  var resizeMobile = function () {
    console.log("resizing mobile");
  };
  var resizeDesktop = function () {
    console.log("resizing desktop");
  };
  return {
    init: function () {
      resizePage();
      window.onresize = () => {
        resizePage;
      }
    }
  };
} ());
