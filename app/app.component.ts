import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
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
import {Book, BookService} from './book.service';
import {BookDetailComponent} from './book-detail.component';
import {BookFormComponent} from './book-form.component';


@Component({
	selector: 'app',
	templateUrl: 'app/html/app.component.html',
	providers: [LoginService, BookService],
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
	{path: '/book/:id', name: 'BookDetail', component: BookDetailComponent},
	{path: '/book/new', name: 'BookNew', component: BookFormComponent},
	{path: '/book/edit/:id', name: 'BookEdit', component: BookFormComponent},
])

export class AppComponent implements OnInit {
	login : Login[];
	books: Book[];

		constructor (private router:Router, private service: BookService, private loginService: LoginService){}

		ngOnInit(){
			this.loginService.getLog().subscribe(
				login => this.login = login,
				error => console.log(error)
			);
			this.service.getBooks().subscribe(
        books => this.books = books,
        error => console.log(error)
      );
		}

}
