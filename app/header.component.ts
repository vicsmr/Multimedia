import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'header',
	templateUrl: 'app/html/header.component.html',
	styleUrls: ['app/css/header.component.css'],
	directive: [ROUTER_DIRECTIVES]
})

export class HeaderComponent {

}
