import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServiceListComponent },
  { path: 'grid/:slug', component: GridComponent },
  { path: 'products/:slug', component: ProductDetailComponent },
  { path: 'services/:slug', component: ServiceDetailComponent },
  { path: 'about/:slug', component: LandingPageComponent },
  // { path: 'other/:slug', component: OtherDetailComponent },
  { path: 'search', component: SearchDetailComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
