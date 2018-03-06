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

  openSideNav(){
    var divToChange = document.getElementById('sideNav');
    var closed = 'closed';
    var open = 'open';

    divToChange.classList.toggle("open");
    

  }

}
