import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Player {

  constructor(
    public id: number,
    public name: string,
    public equipo: string,
    ) {}

}

@Injectable()
export class PlayerService {

  private players = [
  	new Player(1, 'Pepe', 'New York City'),
  	new Player(2, 'Manuel', 'Montreal Impact'),
  	new Player(3, 'Fer', 'Columbus Crew'),
  ];

  getPlayers() {
    return withObserver(this.players);
  }

  getPlayer(id: number | string) {
    let player = this.players.filter(h => h.id === +id)[0]
    return withObserver(new Player(player.id, player.name, player.equipo));
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
    } else {
      player.id = this.players.length+1;
      this.players.push(player);
    }
    return withObserver(player);
  }
}
