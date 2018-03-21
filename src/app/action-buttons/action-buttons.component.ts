import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.sass']
})
export class ActionButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (screen.width < 992) {
      document.getElementById('desktop-only').style.display="none";
    }
  }

  resizeActionBtns(){
    document.getElementById('search-button').style.display="none";
    document.getElementById('search-input').style.display="inline";

    if (screen.width >= 768){
      document.getElementById('quoteBtn').style.width="20%";
      document.getElementById('telBtn').style.width="20%";
      document.getElementById('search-input').style.width="45%";
    } else {
      document.getElementById('quoteBtn').style.width="46%";
      document.getElementById('telBtn').style.width="46%";
      document.getElementById('search-input').style.width="97%";
    }
  }
}
