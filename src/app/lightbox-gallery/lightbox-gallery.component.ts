import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox-gallery',
  templateUrl: './lightbox-gallery.component.html',
  styleUrls: ['./lightbox-gallery.component.sass']
})
export class LightboxGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  // Open the Modal
  openModal(){
    document.getElementById('myModal').style.display="block";
  }
  // Close the Modal
  closeModal() {
    document.getElementById('myModal').style.display="none";
  }
  slideIndex:number = 1;

  // Next/previous controls
  plusSlides(n:number){
    this.showSlides(this.slideIndex += n);
  }
  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }
  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('demo');
    var captionText = document.getElementById('caption');
    if (n > slides.length){
        this.slideIndex = 1
    }
    if (n < 1){
        this.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      // slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    // slides[this.slideIndex-1].style.display="block";
    dots[this.slideIndex-1].className+=" active";
    // captionText.innerHTML = dots[this.slideIndex-1].alt;
  }
  // showSlides(slideIndex);
}
