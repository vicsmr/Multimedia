import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Match, MatchService}   from './match.service';
import {Schedule, ScheduleService}   from './schedule.service';

@Component({
  templateUrl: "app/html/match-form.component.html",
  styleUrls: ["app/css/match-form.component.css"],
})
export class MatchFormComponent {

  newMatch: boolean;
  match: Match;
  schedule: Schedule;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: MatchService,
    private scheduleService: ScheduleService,
    ){

      let id = routeParams.get('id');
      let orden = routeParams.get('orden');
      if(orden){
        service.getMatch(id).subscribe(
          match => this.match = match,
          error => console.error(error)
        );
        this.newMatch = false;
      } else {
        scheduleService.getSchedule(id).subscribe(
          schedule => this.schedule = schedule,
          error => console.error(error)
        );
        this.match = new Match(undefined,'','');
        this.newMatch = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.match.schedule = this.schedule;
    this.service.saveMatch(this.match);
    window.history.back();
  }
}
