import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

@Component({
	selector: 'schedule1',
	directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/schedule1.component.html',
	styleUrls: ['app/css/schedule.component.css']
})

export class Schedule1Component {

	constructor(private router: Router) {
	}

	gotoSchedule2() {
    this.router.navigate(['Schedule2']);
  }
}
