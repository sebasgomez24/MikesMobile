import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  groupOptionsSelect = []

    constructor() { }

    ngOnInit() {
      this.groupOptionsSelect = [
        { value: '', label: 'DOOR AND WINDOW SCREENS', group: true },
        { value: '1', label: 'Retractable Screen Doors' },
        { value: '2', label: 'Sliding Screen Doors' },
        { value: '3', label: 'Swinging Screen Doors' },
        { value: '4', label: 'Pet Doors' },
        { value: '5', label: 'Window Screen Repair' },
        { value: '6', label: 'Solar Screens' },
        { value: '', label: 'CHIMNEY SERVICES', group: true },
        { value: '7', label: 'Chimney Inspection' },
        { value: '8', label: 'Chimney Cleaning' },
        { value: '9', label: 'Chimney Repair' },
        { value: '10', label: 'Masonry Services' },
        { value: '11', label: 'Dryer Vent Cleaning' },
        { value: '', label: 'SECURITY DOORS AND WINDOWS', group: true },
        { value: '12', label: 'Steel Security Doors' },
        { value: '13', label: 'Viewguard' },
        { value: '14', label: 'Tru-View' },
        { value: '15', label: 'Tru-Frame' },
        { value: '16', label: 'Sliding Security Doors' },
        { value: '17', label: 'CRL Guarda Quick Escape' },
        { value: '18', label: 'CRL Guarda Fixed' },
        { value: '19', label: 'CRL Guarda Casement' },
        { value: '', label: 'AWNINGS', group: true },
        { value: '20', label: 'Retractable Pation Awnings' },
        { value: '21', label: 'Drop Roll Sunscreens' },
        { value: '22', label: 'Door and Window Awnings' },
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
