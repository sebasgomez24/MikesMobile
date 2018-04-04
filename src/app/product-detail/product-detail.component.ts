import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';

import * as $ from 'jquery';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
  providers: [ServicesService]
})
export class ProductDetailComponent implements OnInit, OnDestroy {

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    private req:any;
    private routeSub:any;

    slug:string;
    product:ServiceItem;
    recent_install_images=[]

    colorList = ['stdColors', 'colorSetx4', 'colorSetx6', 'swingingDoorColors', 'securityDoorColors'];

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
        "Evening Blue":"#1F4769",
        "Chrome":"#EFEFEF",
        "Green Patina":"#435E57",
        "New Bronze":"#40372D",
        "Pacific Granite":"#707070",
        "Forest Green":"#0E251B",
        "Statuary Bronze":"#42372F"
    }

    constructor(private route: ActivatedRoute, private _service:ServicesService) { }
    
    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.slug = params['slug']
            this.req = this._service.list().subscribe(data => {
                data.filter(item => {
                    if(item.slug == this.slug){
                        this.product = item as ServiceItem;
                        this.recent_install_images = this.product.recentInstallImages;
                        this.galleryImages = this.product.thumbImages;
                    }
                })
            })
        })

        this.galleryOptions = [
            {
                width: '550px',
                height: '450px',
                thumbnailsColumns: 4,
                thumbnailsRemainingCount: true,
                imageArrowsAutoHide: true,
                thumbnailsArrowsAutoHide: true,
                imageSize: NgxGalleryImageSize.Contain,
                imageAnimation: NgxGalleryAnimation.Slide,
                previewCloseOnClick: true, 
                previewCloseOnEsc: true
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];


        var ngxGalImg = document.getElementsByClassName('ngx-gallery-image') as HTMLCollectionOf<HTMLElement>;
        var ngxGalActive = document.getElementsByClassName('ngx-gallery-active') as HTMLCollectionOf<HTMLElement>;
        var ngxGalClick = document.getElementsByClassName('ngx-gallery-clickable') as HTMLCollectionOf<HTMLElement>;

        for(var i in ngxGalImg) {
            ngxGalImg[0].style.zIndex = "0";
            ngxGalActive[0].style.zIndex = "0";
            ngxGalClick[0].style.zIndex = "0";
        }
    }
    ngOnDestroy(){
      this.routeSub.unsubscribe();
      this.req.unsubscribe();
    }

    viewMoreColors(){
        var viewMoreBtn = document.getElementById('more-colors').style.display="none";
        var viewLessBtn = document.getElementById('less-colors').style.display="block";

        for (var i=6; i<19; i++){
            var el = document.getElementById("square-" + i);            
            el.style.display = 'block';
            if (screen.width < 992){
                var ello = document.getElementById("square-p-" + i);
                ello.style.display = 'block';
            }            
        }        
        
    }
    viewLessColors(){
        var viewLessBtn = document.getElementById('less-colors').style.display="none";
        var viewMoreBtn = document.getElementById('more-colors').style.display="block";

        for (var i=6; i<19; i++){
            var el = document.getElementById("square-" + i);            
            el.style.display = 'none';
            if (screen.width < 992){
                var ello = document.getElementById("square-p-" + i);
                ello.style.display = 'none';
            }            
        }     

    }
}
