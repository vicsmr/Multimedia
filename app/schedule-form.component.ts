import {Component, OnInit}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Schedule, ScheduleService}   from './schedule.service';
import {Team, TeamService}   from './team.service';

@Component({
  selector: "schedule-form",
  templateUrl: "app/html/formJugador.component.html",
  styleUrls: ["app/css/formJugador.component.css"],
})
export class ScheduleFormComponent {

  newSchedule: boolean;
  schedule: Schedule;
  team: Team;

  constructor(
    private router:Router,
    routeParams:RouteParams,
    private service: ScheduleService,
    private teamservice: TeamService){

      let id = routeParams.get('id');
      if(id){
        service.getSchedule(id).subscribe(
          schedule => this.schedule = schedule,
          error => console.error(error)
        );
        this.newSchedule = false;
      } else {
        this.schedule = new Schedule(undefined,'', '');
        this.newSchedule = true;
      }
  }

  ngOnInit(){
      this.teamservice.getTeams().subscribe(
        teams => this.teams = teams,
        error => console.log(error)
      );
    }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.saveSchedule(this.schedule);
    window.history.back();
  }
}
