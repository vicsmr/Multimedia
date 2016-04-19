import {Component, OnInit}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Schedule, ScheduleService}   from './schedule.service';
import {Login,LoginService} from './login.service';

@Component({
    templateUrl: 'app/html/schedule.component.html',
    styleUrls: ['app/css/schedule.component.css'],
    directives: [ROUTER_DIRECTIVES],
})
export class ScheduleDetailComponent {

    schedule: Schedule;
    schedules: Schedule[];
    schedulenew: Schedule;
    lastschedule: number;

    constructor(private router: Router, routeParams: RouteParams, private service: ScheduleService, private loginService: LoginService) {
        let id = routeParams.get('id');
        service.getSchedule(id).subscribe(
            schedule => this.schedule = schedule,
            error => console.error(error)
        );
        this.schedulenew = new Schedule(undefined);
    }

    ngOnInit(){
          this.service.getSchedules().subscribe(
          schedules => this.schedules = schedules,
          error => console.log(error)
        );
      }

    removeSchedule() {
        let okResponse = window.confirm("Do you want to remove this schedule?");
        if (okResponse) {
          if !(this.schedule.id === 1){
            this.service.removeSchedule(this.schedule).subscribe(
                _ => this.router.navigate(['Equipo']),
                error => console.error(error)
            )
          }else {
            window.alert("La jornada 1 no se puede borrar");
          }
        }
    }

    gotoSchedules() {
        this.router.navigate(['Equipo']);
    }

    gotoSchedule(schedulefor: Schedule) {
        this.router.navigate(['ScheduleDetail', { id: schedulefor.id }]);
    }

    save() {
      this.service.saveSchedule(this.schedulenew);
      this.router.navigate(['ScheduleDetail', {id: this.schedulenew.id}])
    }
}
