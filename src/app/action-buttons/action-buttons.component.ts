import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.sass']
})
export class ActionButtonsComponent implements OnInit {

  constructor() { }

  optionsSelect = []

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
            { value: '20', label: 'CRL Guarda™ Casement Window Screen' },
            { value: '20', label: 'Retractable Patio Awnings' },
            { value: '20', label: 'Drop Roll Sunscreens' },
            { value: '20', label: 'Door and Window Awnings' },
        ];
        this.growActionBtns();

        if (screen.width < 992) {
            document.getElementById('desktop-only').style.display="none";
        }
  }

  hideShowSearch(){
      var searchInput = document.getElementById('search-input');

      document.getElementById('search-button').classList.toggle("orange");

      if (searchInput.style.display === "none") {
          searchInput.style.display="inline";
          searchInput.style.width="100%";
      } else {
          searchInput.style.display="none"
      }

  }

  growActionBtns(){
      if(screen.width < 992){
        var container = document.getElementById('action-buttons-container');
        container.classList.remove('container', 'mt-3');
        container.classList.add('row');
      }
  }


}
