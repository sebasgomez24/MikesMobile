import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';

import * as $ from 'jquery';

@Component({
	selector: 'app-service-list',
	templateUrl: './service-list.component.html',
	styleUrls: ['./service-list.component.sass'],
	providers: [ServicesService]
})
export class ServiceListComponent implements OnInit, OnDestroy {

	title = 'View Our Top Selling Services'
	categories = ['Screens', 'Chimney', 'Security', 'Awnings', 'Home Improvement']

	private req:any
	serviceList:[ServiceItem]

	constructor(private _service:ServicesService) { }

	ngOnInit() {
		this.req = this._service.list().subscribe(data=>{
			this.serviceList = data as [ServiceItem];
		})
	}

	ngOnDestroy(){
		this.req.unsubscribe();
	}
}
