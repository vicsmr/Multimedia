import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

@Component({
  selector: 'equipo',
  directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/equipo.component.html',
  styleUrls: ['app/css/equipo.component.css']
})

export class EquipoComponent {
  constructor(private router: Router) {
	}

	gotoFormJugador() {
    this.router.navigate(['FormJugador']);
  }
}
