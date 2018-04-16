import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.sass']
})
export class ActionButtonsComponent implements OnInit {
  toppings = new FormControl();
  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  optionsSelect=[]
  groupOptionsSelect=[]

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
