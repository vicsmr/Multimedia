import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Team}   from './team.service';

export class Player {

  constructor(
    public id: number,
    public name: string,
    public equipo: Team,
    public lastname: string,
    public position: string,
    public nacionality: string,
    ) {}

}

@Injectable()
export class PlayerService {

  private players = [
  	new Player(1, 'Pepe', new Team(1, 'New York City',), 'Rodriguez', 'Goalkeeper', 'http://www.onboardlogistics.net/contactenos/bandera-USA.png'),
  	new Player(2, 'Manuel', new Team(2, 'Montreal Impact',), 'Sol', 'Defense', 'http://www.onboardlogistics.net/contactenos/bandera-USA.png'),
  	new Player(3, 'Fer', new Team(3, 'Columbus Crew',), 'Lopez', 'Forward', 'http://www.onboardlogistics.net/contactenos/bandera-USA.png'),
  ];

  getPlayers() {
    return withObserver(this.players);
  }

  getPlayer(id: number | string) {
    let player = this.players.filter(h => h.id === +id)[0]
    return withObserver(new Player(player.id, player.name, player.equipo, player.lastname, player.position, player.nacionality));
  }

  removePlayer(player: Player){
    for(let i=0; i<this.players.length; i++){
        if(this.players[i].id === player.id){
          this.players.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  savePlayer(player: Player){
    if(player.id){
      let oldPlayer = this.players.filter(h => h.id === player.id)[0];
      oldPlayer.name = player.name;
      oldPlayer.equipo = player.equipo;
      oldPlayer.lastname = player.lastname;
      oldPlayer.position = player.position;
      oldPlayer.nacionality = player.nacionality;
    } else {
      player.id = this.players.length+1;
      this.players.push(player);
    }
    return withObserver(player);
  }
}
