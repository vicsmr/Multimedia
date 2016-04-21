import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Schedule} from './schedule.service';
import {Team} from './team.service';

export class Match {

  constructor(
    public id: number,
    public date: string,
    public schedule: Schedule,
    public local: Team,
    public visitor: Team,
    public resultLocal: number,
    public resultVisitor: number,
    ) {}

}

@Injectable()
export class MatchService {

  private matchs = [
  	new Match(1, "21 Marzo", new Schedule(1), new Team(1, 'New York City', 'http://futhead.cursecdn.com/static/img/15/clubs/689.png', 'https://elrincondejoost.files.wordpress.com/2014/04/red-bulls-ny.jpg', 'El New York City es un club de fútbol de Estados Unidos de la ciudad de New York, en Nueva York. Fue fundado en 1992 por la familia Saputo y juega actualmente en la Conferencia Este de la Major League Soccer.', 'Historia'),
    new Team(3, 'Columbus Crew', 'http://www.moddingway.com/fifadb/teams/l687.png', 'https://s3.amazonaws.com/user-media.venngage.com/305423-48ce8432e479aa7c2e7789bf07c0f307.jpg', 'El Columbus Crew es un club de fútbol de Estados Unidos de la ciudad de Columbus, en Columbia. Fue fundado en 1992 por la familia Saputo y juega actualmente en la Conferencia Este de la Major League Soccer.', 'Historia'), 0, 0),
  	// new Match(2, "22 Marzo", new Schedule(2)),
  	// new Match(3, "23 Marzo", new Schedule(2)),
  ];

  getMatches() {
    return withObserver(this.matchs);
  }

  getMatch(id: number | string) {
    let match = this.matchs.filter(h => h.id === +id)[0]
    return withObserver(new Match(match.id, match.date, match.schedule, match.local, match.visitor, match.resultLocal, match.resultVisitor));
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
      oldMatch.local = match.local;
      oldMatch.visitor = match.visitor;
      oldMatch.resultLocal = match.resultLocal;
      oldMatch.resultVisitor = match.resultVisitor
    } else {
      match.id = this.matchs.length+1;
      this.matchs.push(match);
    }
    return withObserver(match);
  }
}
