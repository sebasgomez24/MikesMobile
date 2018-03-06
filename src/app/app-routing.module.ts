import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// import { DashboardComponent }     from './dashboard/dashboard.component'; 
import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { PortalDetailComponent } from './portal-detail/portal-detail.component';
// import { RegisterComponent } from './register/register.component';
// import { SearchDetailComponent } from './search-detail/search-detail.component';
// import { MessageDetailComponent } from './message-detail/message-detail.component';

 
const appRoutes: Routes = [
  // { path: 'dashboard/:username', component: DashboardComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'messages/:id', component: MessageDetailComponent },
  // { path: 'portals/:slug', component: PortalDetailComponent },
  // { path: 'register', component: RegisterComponent },
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