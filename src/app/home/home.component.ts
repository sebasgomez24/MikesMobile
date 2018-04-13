import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
    optionsSelect = []

    constructor() { }

    ngOnInit() {
      this.optionsSelect = [
        { value: '1', label: 'Window Screen Repair' },
        { value: '2', label: 'Solar Screens' },
        { value: '3', label: 'Sliding Screen Door' },
        { value: '4', label: 'Swinging Screen Door' },
        { value: '5', label: 'Retractable Screen Door' },
        { value: '6', label: 'Screen Doors' },
        { value: '7', label: 'Pet Doors' },
        { value: '8', label: 'Chimney Inspection' },
        { value: '9', label: 'Chimney Cleaning' },
        { value: '10', label: 'Chimney Repair' },
        { value: '11', label: 'Chimney Accessories' },
        { value: '12', label: 'Chimney Resources' },
        { value: '13', label: 'Masonry Services' },
        { value: '14', label: 'Steel Security Door' },
        { value: '15', label: 'Viewguard Security Door' },
        { value: '16', label: 'TRU-View Security Door' },
        { value: '17', label: 'TRU-Frame Security Door' },
        { value: '18', label: 'Sliding Security Doors' },
        { value: '19', label: 'CRL Guarda™ Quick Escape Window Screen' },
        { value: '20', label: 'CRL Guarda™ Fixed Window Screen' },
        { value: '21', label: 'CRL Guarda™ Casement Window Screen' },
        { value: '22', label: 'Retractable Patio Awnings' },
        { value: '23', label: 'Drop Roll Sunscreens' },
        { value: '24', label: 'Door and Window Awnings' },
      ];
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
