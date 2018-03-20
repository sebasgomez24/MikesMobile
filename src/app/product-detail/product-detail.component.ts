import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
  providers: [ServicesService]
})
export class ProductDetailComponent implements OnInit {

  private req:any;
  private routeSub:any;

  slug:string
  product:ServiceItem

  constructor(private route: ActivatedRoute, private _service:ServicesService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      this.req = this._service.list().subscribe(data => {
        data.filter(item => {
          if(item.slug == this.slug){
            this.product = item as ServiceItem;
          }
        })
      })
    })
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }

}
