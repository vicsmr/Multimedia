import {Component,OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES,RouteParams} from 'angular2/router';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {ClasificationComponent} from './clasification.component';
import {TeamsComponent} from './teams.component';
import {Schedule1Component} from './schedule1.component';
import {Schedule2Component} from './schedule2.component';
import {JugadorComponent} from './jugador.component';
import {EquipoComponent} from './equipo.component';
import {PrincipalComponent} from './principal.component';
import {FormJugadorComponent} from './formJugador.component';
import {Login,LoginService} from './login.service';


@Component({
	selector: 'app',
	templateUrl: 'app/html/app.component.html',
	providers: [LoginService],
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
	{path:'/formJugador', name: 'FormJugador', component: FormJugadorComponent},
])

export class AppComponent implements OnInit {
	login : Login;

		constructor (private router:Router,private loginService: LoginService){}

		ngOnInit(){
			this.service.login(email,password).subscribe(
				login => this.login.usuario = email.value,
				error => console.log(error)
			);
		}

}
