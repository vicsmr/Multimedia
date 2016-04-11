import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {ClasificationComponent} from './clasification.component';
import {TeamsComponent} from './teams.component';
import {Schedule1Component} from './schedule1.component';
import {Schedule2Component} from './schedule2.component';
import {JugadorComponent} from './jugador.component';
import {EquipoComponent} from './equipo.component';
import {PrincipalComponent} from './principal.component';


@Component({
	selector: 'app',
	templateUrl: 'app/html/app.component.html',
  directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES],
})

@RouteConfig([
	{path:'/home', name: 'Principal', component: PrincipalComponent, useAsDefault: true},
  {path:'/clasification', name: 'Clasification', component: ClasificationComponent},
	{path:'/teams', name: 'Teams', component: TeamsComponent},
	{path:'/schedule1', name: 'Schedule1', component: Schedule1Component},
	{path:'/schedule2', name: 'Schedule2', component: Schedule2Component},
	{path:'/jugador', name: 'Jugador', component: JugadorComponent},
	{path:'/equipo', name: 'Equipo', component: EquipoComponent},
])

export class AppComponent {

	public isLogged: boolean;
	constructor(){
		this.isLogged = false;
	}
	login(email, password){
		if(email.value =="test" && password.value=="test"){
			this.isLogged = true;
		}
	}
	logout(){
		this.isLogged = false;
	}
}
}
