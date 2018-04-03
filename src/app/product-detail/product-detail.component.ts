import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
  providers: [ServicesService]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    
    constructor(private route: ActivatedRoute, private _service:ServicesService) { }

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

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.slug = params['slug']
            this.req = this._service.list().subscribe(data => {
                data.filter(item => {
                    if(item.slug == this.slug){
                        this.product = item as ServiceItem;
                        this.recent_install_images = this.product.recentInstallImages;
                    }
                })
            })
        })
    }
    ngOnDestroy(){
      this.routeSub.unsubscribe();
      this.req.unsubscribe();
    }

    viewMoreColors(){
        var viewMoreBtn = document.getElementById('more-colors');
        var hiddenSquare = document.getElementById('hidden-square');
        var hiddenP = document.getElementById('hidden-p');

        viewMoreBtn.style.display="none";
        hiddenSquare.style.display="block";
        hiddenP.style.display="block";
    }
}

!function(a){
  a.fn.extend({
    simpleGal:function(b){
      var c = { mainImage:".placeholder" };
      return b = a.extend(c,b),
        this.each(function(){
          var c = a(this).find("a"), d = a(this).siblings().find(b.mainImage);
          c.on("click", function(b){
            b.preventDefault();
            var c = a(this).attr("href");
            d.attr("src",c)
          })
        })
    }
  })
}($);

$(document).ready(function () {
  $('.thumbnails').simpleGal({
    mainImage: '.custom'
  });
});
