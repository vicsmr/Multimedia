import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Team {

  constructor(
    public id: number,
    public fullname: string,
    public abstract: string,
    public imgequipo: string,
    public description: string,) {}

}

@Injectable()
export class TeamService {

  private teams = [
  	new Book(1, 'New York City', 'http://futhead.cursecdn.com/static/img/15/clubs/689.png', 'https://elrincondejoost.files.wordpress.com/2014/04/red-bulls-ny.jpg', 'El New York City es un club de fútbol de Estados Unidos de la ciudad de New York, en Nueva York. Fue fundado en 1992 por la familia Saputo y juega actualmente en la Conferencia Este de la Major League Soccer.'),
  	new Book(2, 'Montreal Impact','http://www.bold.dk/img/tag/64x64/758.png', 'http://www.elfinanciero.com.mx/files/article_main/uploads/2015/04/27/553eeea70d488.jpg', 'El Montreal es un club de fútbol de Canadá de la ciudad de Montreal, en Quebec. Fue fundado en 1992 por la familia Saputo y juega actualmente en la Conferencia Este de la Major League Soccer.'),
  	new Book(3, 'Columbus Crew', 'http://www.moddingway.com/fifadb/teams/l687.png', 'https://s3.amazonaws.com/user-media.venngage.com/305423-48ce8432e479aa7c2e7789bf07c0f307.jpg', 'El Columbus Crew es un club de fútbol de Estados Unidos de la ciudad de Columbus, en Columbia. Fue fundado en 1992 por la familia Saputo y juega actualmente en la Conferencia Este de la Major League Soccer.'),
  ];

  getTeams() {
    return withObserver(this.teams);
  }

  getTeam(id: number | string) {
    let team = this.teams.filter(h => h.id === +id)[0]
    return withObserver(new Team(team.id, team.fullname, team.abstract, team.imgequipo, team.description));
  }

  removeTeam(team: Team){
    for(let i=0; i<this.teams.length; i++){
        if(this.teams[i].id === team.id){
          this.teams.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  saveTeam(team: Team){
    if(team.id){
      let oldTeam = this.teams.filter(h => h.id === team.id)[0];
      oldTeam.fullname = team.fullname;
      oldTeam.abstract = team.abstract;
      oldTeam.imgequipo = team.imgequipo;
      oldTeam.description = team.description;
    } else {
      book.id = this.books.length+1;
      this.books.push(book);
    }
    return withObserver(book);
  }
}
