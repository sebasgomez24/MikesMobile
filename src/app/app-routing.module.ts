import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


 
const appRoutes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServiceListComponent },
  { path: 'products/:slug', component: ProductDetailComponent },
  { path: 'services/:slug', component: ServiceDetailComponent },
  { path: 'search', component: SearchDetailComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
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