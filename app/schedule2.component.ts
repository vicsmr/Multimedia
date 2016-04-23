import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

@Component({
	selector: 'Schedule2',
	directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/schedule2.component.html',
	styleUrls: ['app/css/schedule.component.css']
})

export class Schedule2Component {

	constructor(private router: Router) {
	}

	gotoSchedule2() {
    this.router.navigate(['Schedule1']);
  }

}
