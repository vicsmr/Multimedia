import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Login {

  constructor(
    public usuario: string;
    public contrasena: string;
    public isLogged: boolean){}
}

@Injectable()
export class LoginService {

  private log = [
    new Login('a', '1234', false)
  ];

  getLog() {
    return withObserver(this.log);
  }

  logIn(logi:Login){
    for(let i=0; i<this.log.length; i++){
      if(this.log[i].usuario === logi.usuario && this.log[i].contrasena === logi.contrasena){
        this.log.isLogged = true;
        break;
      }
    }
	}

	logFuera(){
		this.log.isLogged = false;
	}
}
