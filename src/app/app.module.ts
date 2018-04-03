import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MDBBootstrapModules } from 'ng-mdb-pro';
import { MDBSpinningPreloader } from 'ng-mdb-pro';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { LightboxGalleryComponent } from './lightbox-gallery/lightbox-gallery.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

import { KeysPipe } from './utility/keys.pipe';
import { SwingingDoorsListComponent } from './swinging-doors-list/swinging-doors-list.component';
import { ChimneyAccessoriesListComponent } from './chimney-accessories-list/chimney-accessories-list.component';
import { ChimneyRepairsListComponent } from './chimney-repairs-list/chimney-repairs-list.component';


@NgModule({
  declarations: [
    AppComponent,
    // myComponents
    AboutComponent,
    ActionButtonsComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    GridComponent,
    HomeComponent,
    LightboxGalleryComponent,
    NavigationComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    QuoteFormComponent,
    SearchComponent,
    SearchDetailComponent,
    ServiceListComponent,
    ServiceDetailComponent,
    // myPipes
    KeysPipe,
    SwingingDoorsListComponent,
    ChimneyAccessoriesListComponent,
    ChimneyRepairsListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModules.forRoot(),
    Ng2PageScrollModule,
  ],
  providers: [
      MDBSpinningPreloader,
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
