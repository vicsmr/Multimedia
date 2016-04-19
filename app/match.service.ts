import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Schedule} from './schedule.service';

export class Match {

  constructor(
    public id: number,
    public date: string,
    public schedule: Schedule,
    ) {}

}

@Injectable()
export class MatchService {

  private matchs = [
  	new Match(1, "21 Marzo", new Schedule(1)),
  	new Match(2, "22 Marzo", new Schedule(2)),
  	new Match(3, "23 Marzo", new Schedule(2)),
  ];

  getMatches() {
    return withObserver(this.matchs);
  }

  getMatch(id: number | string) {
    let match = this.matchs.filter(h => h.id === +id)[0]
    return withObserver(new Match(match.id, match.date, match.schedule));
  }

  removeMatch(match: Match){
    for(let i=0; i<this.matchs.length; i++){
        if(this.matchs[i].id === match.id){
          this.matchs.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  saveMatch(match: Match){
    if(match.id){
      let oldMatch = this.matchs.filter(h => h.id === match.id)[0];
      oldMatch.fecha = match.fecha;
      oldMatch.schedule = match.schedule;
    } else {
      match.id = this.matchs.length+1;
      this.matchs.push(match);
    }
    return withObserver(match);
  }
}
