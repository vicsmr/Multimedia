import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {Team, TeamService}   from './team.service';

@Component({
	selector: 'clasification',
	directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/clasification.component.html',
	styleUrls: ['app/css/clasification.component.css'],
})
export class ClasificationComponent implements OnInit {
	teams: Team[];

  constructor(private router:Router, private service: TeamService) {}

  ngOnInit(){
      this.service.getTeams().subscribe(
        teams => this.teams = teams,
        error => console.log(error)
      );
    }


}
