import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceItem } from '../services/service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.sass'],
  providers: [ServiceService]
})
export class ServiceListComponent implements OnInit, OnDestroy {

  title = 'View Our Top Selling Services'
  private req:any
  serviceList:[ServiceItem]
  categories = ['Screens', 'Chimneys', 'Security', 'Awnings', 'Home Improvement']
  subcategories = ['Window', 'Door']
  screenServices = ['Screen Repair', 'Solar Screens', 'Sliding Screen Door', 'Retractable Screen Door', 'Swinging Screen Door', 'Pet Doors', ]

  constructor(private _service:ServiceService) { }

  ngOnInit() {
    this.req = this._service.list().subscribe(data=>{
      this.serviceList = data as [ServiceItem];
    })
  }

  ngOnDestroy(){
    this.req.unsubscribe();
  }

}