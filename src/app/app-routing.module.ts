import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { SearchDetailComponent } from './search-detail/search-detail.component';
// import { MessageDetailComponent } from './message-detail/message-detail.component';

 
const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'messages/:id', component: MessageDetailComponent },
  // { path: 'portals/:slug', component: PortalDetailComponent },
  // { path: 'search', component: SearchDetailComponent },
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