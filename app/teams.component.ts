import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'teams',
  directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/teams.component.html',
  styleUrls: ['app/css/teams.component.css']
})

export class TeamsComponent {}
