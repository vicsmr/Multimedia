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

  getLog(usuario: string){
    return this.log.isLogged;
  }

  setLog(usuario: string){
    this.log.isLogged = false;
  }

  login(email, password){
    for(let i=0; i<this.log.length; i++){
      if(this.log[i].usuario === email.value && this.log[i].contrasena === password.value){
        this.log.isLogged = true;
        break;
      }
    }
    return withObserver(this.log);
	}

	logout(){
		this.log.isLogged = false;
	}
}
