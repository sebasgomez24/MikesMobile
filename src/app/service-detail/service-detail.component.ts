import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.sass'],
  providers: [ServicesService]
})
export class ServiceDetailComponent implements OnInit, OnDestroy {

  private req:any;
  private routeSub:any;

  slug:string
  service:ServiceItem
  colorSquares = ['stdColors', 'colorSetx4', 'colorSetx6', 'swingingDoorColors', 'securityDoorColors']
  stdColors = {
      "Anodized Bronze":"#2D3017",
      "White":"#ffffff"
  }
  colorSetx4 = {
      "Almond":"#F3E7D3",
      "Anodized Bronze":"#2D3017",
      "Mill":"#999AA3",
      "White":"#ffffff"
  }
  colorSetx6 = {
      "Black":"#000000",
      "Bronze":"#473428",
      "Champagne":"#A69882",
      "Desert Sand":"#F4EBD4",
      "Mill":"#999AA3",
      "White":"#ffffff"
  }
  swingingDoorColors = {
      "Adobe":"#E0B17D",
      "Almond":"#F3E7D3",
      "Black":"#000000",
      "Anodized Bronze":"#2D3017",
      "Mill":"#999AA3",
      "Anodized Satin":"#E1E2E8",
      "Tan":"#AD8166",
      "White":"#ffffff"
  }
  securityDoorColors = {
      "Alabaster":"#FAF9ED",
      "Almond":"#F4EDCA",
      "Autumn Brown":"#3F2823",
      "Bear Green":"#103427",
      "Champagne Beige":"#928A6F",
      "Charcoal Grey":"#535353",
      "Country Blue":"#6C99B6",
      "Desert Sand":"#E5E0B5",
      "Flat Black":"#121412",
      "New England Grey":"#B0BBB7",
      "Post Office Blue":"#182F4D",
      "Terra Cotta":"#671218",
      "Chrome":"#EFEFEF",
      "Evening Blue":"#1F4769",
      "Forest Green":"#0E251B",
      "Green Patina":"#435E57",
      "New Bronze":"#40372D",
      "Pacific Granite":"#707070",
      "Statuary Bronze":"#42372F"
  }

  optionsSelect = []
  
  constructor(private route: ActivatedRoute, private _service:ServicesService, private sanitizer:DomSanitizer) { }

  ngOnInit() {
      this.optionsSelect = [
            { value: '1', label: 'Window Screen Repair' },
            { value: '2', label: 'Solar Screens' },
            { value: '3', label: 'Sliding Screen Door' },
            { value: '4', label: 'Swinging Screen Door' },
            { value: '5', label: 'Retractable Screen Door' },
            { value: '6', label: 'Screen Doors' },
            { value: '7', label: 'Pet Doors' },
            { value: '8', label: 'Chimney Inspection' },
            { value: '9', label: 'Chimney Cleaning' },
            { value: '10', label: 'Chimney Repair' },
            { value: '11', label: 'Chimney Accessories' },
            { value: '12', label: 'Chimney Resources' },
            { value: '13', label: 'Masonry Services' },
            { value: '14', label: 'Steel Security Door' },
            { value: '15', label: 'Viewguard Security Door' },
            { value: '16', label: 'TRU-View Security Door' },
            { value: '17', label: 'TRU-Frame Security Door' },
            { value: '18', label: 'Sliding Security Doors' },
            { value: '19', label: 'CRL Guarda™ Quick Escape Window Screen' },
            { value: '20', label: 'CRL Guarda™ Fixed Window Screen' },
            { value: '20', label: 'CRL Guarda™ Casement Window Screen' },
            { value: '20', label: 'Retractable Patio Awnings' },
            { value: '20', label: 'Drop Roll Sunscreens' },
            { value: '20', label: 'Door and Window Awnings' },
        ];
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      this.req = this._service.list().subscribe(data => {
        data.filter(item => {
          if(item.slug == this.slug){
              this.service = item as ServiceItem;
          }
        })
      })
    })
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }

  getEmbedUrl(video){
      return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + video)
  }

}
