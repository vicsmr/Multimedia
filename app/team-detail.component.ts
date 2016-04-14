import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Team, TeamService}   from './team.service';

@Component({
    templateUrl: 'app/html/equipo.component.html',
    styleUrls: ['app/css/equipo.component.css'],
    directives: [ROUTER_DIRECTIVES],
})
export class TeamDetailComponent {

    team: Team;

    constructor(private router: Router, routeParams: RouteParams, private service: TeamService) {
        let id = routeParams.get('id');
        service.getTeam(id).subscribe(
            team => this.team = team,
            error => console.error(error)
        );
    }

    removeTeam() {
        let okResponse = window.confirm("Do you want to remove this team?");
        if (okResponse) {
            this.service.removeTeam(this.team).subscribe(
                _ => this.router.navigate(['Teams']),
                error => console.error(error)
            )
        }
    }

    editTeam() {
        this.router.navigate(['TeamEdit', { id: this.team.id }]);
    }

    gotoTeams() {
        this.router.navigate(['Teams']);
    }

  	gotoFormJugador() {
      this.router.navigate(['FormJugador']);
    }
}
