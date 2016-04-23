import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'principal',
  directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/principal.component.html',
  styleUrls: ['app/css/principal.component.css']
})

export class PrincipalComponent {}
