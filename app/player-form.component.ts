import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Player, PlayerService}   from './player.service';

@Component({
  selector: "player-form",
  templateUrl: "app/html/formJugador.component.html",
  styleUrls: ["app/css/formJugador.component.css"],
})
export class PlayerFormComponent {

  newPlayer: boolean;
  player: Player;

  constructor(
    private router:Router,
    routeParams:RouteParams,
    private service: PlayerService){

      let id = routeParams.get('id');
      if(id){
        service.getPlayer(id).subscribe(
          player => this.player = player,
          error => console.error(error)
        );
        this.newPlayer = false;
      } else {
        this.player = new Player(undefined,'', '');
        this.newPlayer = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.savePlayer(this.player);
    window.history.back();
  }
}
