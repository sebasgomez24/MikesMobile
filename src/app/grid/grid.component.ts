import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass'],
  providers: [ServicesService]
})
export class GridComponent implements OnInit {

    title = 'View our top services'
    gridType = ['swinging-screen-doors', 'accessories', 'repairs', 'resources', 'masonry-services', 'steel-security-doors']

    private getReq:any;
    private listReq:any
    private routeSub:any;

    slug:string
    service:ServiceItem
	serviceList:[ServiceItem]

    constructor(private route: ActivatedRoute, private _service:ServicesService) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.slug = params['slug']
            this.getReq = this._service.list().subscribe(data => {
                data.filter(item => {
                    if(item.slug == this.slug){
                        this.service = item as ServiceItem;
                    }
                })
            })
        })

        this.listReq = this._service.list().subscribe(data=>{
			this.serviceList = data as [ServiceItem];
		})
    }

    ngOnDestroy(){
        this.routeSub.unsubscribe();
        this.listReq.unsubscribe();
        this.getReq.unsubscribe();
    }

}
