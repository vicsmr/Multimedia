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

  login(email, password){
    for(let i=0; i<this.log.length; i++){
      if(this.log[i].usuario === email.value && this.log[i].contrasena === password.value){
        this.log.isLogged = true;
        break;
      }
    }
	}

	logout(){
		this.log.isLogged = false;
	}
}
