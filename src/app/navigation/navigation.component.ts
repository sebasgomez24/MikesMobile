import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})

export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  openDropdown(){
    var dropdown = document.getElementById('dropdown');

    if(screen.width > 992){
      dropdown.classList.add('show'); 
    }
    
  }
  closeDropdown(){
    var dropdown = document.getElementById('dropdown');
    dropdown.classList.remove('show'); 
  }

}
