import { NgModule } 				from '@angular/core';
import { RouterModule, Routes }		from '@angular/router';
import { AboutComponent } 			from './about/about.component';
import { ContactComponent } 		from './contact/contact.component';
import { GridComponent } 			from './grid/grid.component';
import { HomeComponent } 			from './home/home.component';
import { LandingPageComponent } 	from './landing-page/landing-page.component';
import { PageNotFoundComponent } 	from './page-not-found/page-not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { ProductDetailComponent } 	from './product-detail/product-detail.component';
import { ServiceDetailComponent } 	from './service-detail/service-detail.component';
import { ServiceListComponent } 	from './service-list/service-list.component';
import { SearchDetailComponent } 	from './search-detail/search-detail.component';
import { SeoAdwordsLpComponent } from './seo-adwords-lp/seo-adwords-lp.component';
import { SeoLocationLpComponent } 	from './seo-location-lp/seo-location-lp.component';

const appRoutes: Routes = [
  { path: 'about', 				component: AboutComponent, 						data: { title: "About Mike's Mobile" }},
  { path: 'about/:slug', 		component: LandingPageComponent, 				data: { title: "Mike's Mobile Screen and Chimney Service" }},
  { path: 'blog', 				component: PostListComponent, 						data: { title: "Mike's Mobile Blog" }},
  { path: 'blog/:slug',   component:PostDetailComponent,        data:{ title: "Mike's Mobile Blog Post"}},
  { path: 'contact', 			component: ContactComponent,					data: { title: "Contact Mike's Mobile" }},
  { path: 'grid/:slug', 		component: GridComponent, 						data: { title: "Mike's Mobile Screen and Chimney Service" }},
  { path: 'products/:slug', 	component: ProductDetailComponent, 				data: { title: "Mike's Mobile Screen and Chimney Service" }},
  { path: 'services/:slug', 	component: ServiceDetailComponent, 				data: { title: "Mike's Mobile Services" }},
  { path: 'landingpages/:slug',   component: SeoAdwordsLpComponent,     data: { title: "Mike's Mobile Adwords Landing Pages"}},
  { path: 'sem/:slug', 			component: SeoLocationLpComponent, 				data: { title: "Mike's Mobile Screen and Chimney Service" }},
  { path: 'search', 			component: SearchDetailComponent, 				data: { title: "Search Mike's Mobile" }},
  { path: '', 					component: HomeComponent, pathMatch: 'full', 	data: { title: "Mike's Mobile Screen and Chimney Service" }},
  { path: '**', 				component: PageNotFoundComponent,				data: { title: "Page Not Found on Mike's Mobile" }}
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
