import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.sass'],
  providers: [ServicesService]
})
export class ServiceDetailComponent implements OnInit, OnDestroy {

    stdColors = {
        "Anodized Bronze":"#2D3017",
        "White":"#ffffff"
    }
    screenFrameColors = {
        Black:"/assets/images/colors/suntex-black.png",
        Brown:"/assets/images/colors/suntex-brown.png",
        Gray:"/assets/images/colors/suntex-grey.png",
        Stucco:"/assets/images/colors/suntex-stucco.png"
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
    private req:any;
    private routeSub:any;

    slug:string
    service:ServiceItem

    colorSquares = ['stdColors', 'colorSetx4', 'colorSetx6', 'swingingDoorColors', 'securityDoorColors']
    extra_images=[]
    info_graphics=[]
    groupOptionsSelect=[]

    petImages = {}
  
    gallery_options: NgxGalleryOptions[];
    gallery_images: NgxGalleryImage[];

    constructor(private route: ActivatedRoute, private _service:ServicesService, private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params=>{
        this.slug = params['slug']
        this.req = this._service.list().subscribe(data=>{
            data.filter(item=>{
                if(item.slug == this.slug){
                    this.service = item as ServiceItem;
                    this.extra_images = this.service.extraImages;
                    this.petImages = this.service.images;
                    this.gallery_images = this.service.recentInstallImages;
                }
            })
        })
    })

    
    
    this.gallery_options = [
        { 
            width: '600px', 
            height: '500px', 
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
    ];

    this.groupOptionsSelect = [
        { value: '', label: 'DOOR AND WINDOW SCREENS', group: true },
        { value: '1', label: 'Retractable Screen Doors' },
        { value: '2', label: 'Sliding Screen Doors' },
        { value: '3', label: 'Swinging Screen Doors' },
        { value: '4', label: 'Pet Doors' },
        { value: '5', label: 'Window Screen Repair' },
        { value: '6', label: 'Solar Screens' },
        { value: '', label: 'CHIMNEY SERVICES', group: true },
        { value: '7', label: 'Chimney Inspection' },
        { value: '8', label: 'Chimney Cleaning' },
        { value: '9', label: 'Chimney Repair' },
        { value: '10', label: 'Masonry Services' },
        { value: '11', label: 'Dryer Vent Cleaning' },
        { value: '', label: 'SECURITY DOORS AND WINDOWS', group: true },
        { value: '12', label: 'Steel Security Doors' },
        { value: '13', label: 'Viewguard' },
        { value: '14', label: 'Tru-View' },
        { value: '15', label: 'Tru-Frame' },
        { value: '16', label: 'Sliding Security Doors' },
        { value: '17', label: 'CRL Guarda Quick Escape' },
        { value: '18', label: 'CRL Guarda Fixed' },
        { value: '19', label: 'CRL Guarda Casement' },
        { value: '', label: 'AWNINGS', group: true },
        { value: '20', label: 'Retractable Pation Awnings' },
        { value: '21', label: 'Drop Roll Sunscreens' },
        { value: '22', label: 'Door and Window Awnings' },
    ];
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

    getEmbedUrl(video){
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + video)
    }

}
