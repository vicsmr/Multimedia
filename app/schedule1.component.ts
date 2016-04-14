import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Team, TeamService}   from './team.service';

@Component({
	selector: 'schedule1',
	directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/schedule1.component.html',
	styleUrls: ['app/css/schedule.component.css']
})

export class Schedule1Component {

	teams: Team[];

	constructor(private router: Router, private service: TeamService) {
	}

	gotoSchedule2() {
    this.router.navigate(['Schedule2']);
  }

	ngOnInit(){
		this.service.getTeams().subscribe(
			teams => this.teams = teams,
			error => console.log(error)
		);
	}
}
