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

  title = 'Services List'
  private req:any
  serviceList:[ServiceItem]

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
