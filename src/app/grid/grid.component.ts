import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';

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
    
    line_type:string[];

    gallery_images: NgxGalleryImage[];
    gallery_options: NgxGalleryOptions[];

    constructor(private route: ActivatedRoute, private _service:ServicesService) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.slug = params['slug']
            this.getReq = this._service.list().subscribe(data => {
                data.filter(item => {
                    if(item.slug == this.slug){
                        this.service = item as ServiceItem;
                        this.gallery_images = this.service.recentInstallImages;
                    }
                })
            })
        })

        this.listReq = this._service.list().subscribe(data=>{
			this.serviceList = data as [ServiceItem];
        })
        
        this.line_type = ["Signature", "Premier", "Standard"]

        this.gallery_options = [
            { 
                width: '700px', 
                height: '600px', 
                thumbnailsColumns: 3, 
                thumbnailsRows: 2, 
                thumbnailsPercent: 40, 
                imagePercent: 60, 
                thumbnailMargin: 2, 
                thumbnailsMargin: 2, 
                imageAutoPlay: true, 
                imageAutoPlayPauseOnHover: true, 
                previewAutoPlay: true, 
                previewAutoPlayPauseOnHover: true, 
                previewCloseOnClick: true, 
                previewCloseOnEsc: true
            },
            { 
                breakpoint: 500, 
                width: '300px', 
                height: '300px', 
                thumbnailsColumns: 3 
            },
            { 
                breakpoint: 300, 
                width: '100%', 
                height: '200px', 
                thumbnailsColumns: 2 
            }
        ]

    }

    ngOnDestroy(){
        this.routeSub.unsubscribe();
        this.listReq.unsubscribe();
        this.getReq.unsubscribe();
    }

}
