import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } 							from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute }		from '@angular/router';
import { Title }     									from '@angular/platform-browser';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Mikes Mobile';
  
  constructor(public router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
        }
			});
	
	}
	
	ngOnInit(){
		this.router.events
			.filter((event) => event instanceof NavigationEnd)
			.map(() => this.activatedRoute)
			.map((route) => {
				while (route.firstChild) route = route.firstChild;
				return route;
			})
			.filter((route) => route.outlet === 'primary')
			.mergeMap((route) => route.data)
			.subscribe((event) => this.titleService.setTitle(event['title']));

			this.router.events.subscribe((evt) => {
				if (!(evt instanceof NavigationEnd)) {
						return;
					}
					window.scrollTo(0, 0)
			});

	}

}

