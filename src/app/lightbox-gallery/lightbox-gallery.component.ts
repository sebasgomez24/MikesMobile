import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';

@Component({
  selector: 'app-lightbox-gallery',
  templateUrl: './lightbox-gallery.component.html',
  styleUrls: ['./lightbox-gallery.component.sass'],
  providers: [ServicesService]
})
export class LightboxGalleryComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private _service:ServicesService) { }
  private req:any;
  private routeSub:any;

  slug:string;
  product:ServiceItem;

  images = []

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

  ngOnDestroy(){}


}
