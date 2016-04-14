import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Book, BookService}   from './book.service';

@Component({
  template: `
  <div id="principal" class="container">
  <ol id="breadcrumb">
      <li>
          <a href="Pruebas.html"><img class="img-rounded" src="http://4.bp.blogspot.com/_A0w2msagD40/SSrCvRwW5cI/AAAAAAAACb8/guoEtikOYSc/s1600/imagen_flecha_derecha%5B1%5D.gif">Home</a>
      </li>
      <li id="raya">/</li>
      <li><a id="active">New Team</a>
      </li>
  </ol>
  <div id="cuerpo">
      <div class="row">
          <div class="col-md-2 hidden-sm hidden-xs">
              <div id="galeria1">
              </div>
          </div>
          <div class="col-md-8 col-sm-12 col-xs-12">
              <div class="panel panel-warning">
                  <div class="panel-heading">
                      <h3 class="panel-title">Form to add a new team</h3>
                  </div>
                  <div class="panel-body">
                      <form name="formteam" action="#" method="post">
                          <fieldset>
                              <legend>Sheet football team:</legend>
                              <div class="col-xs-6">
                                  <p>
                                      <b>Name*:</b>
                                      <input [(ngModel)]="book.title" type='text' class="form-control" name='name' placeholder="Name" id="name" required/>
                                  </p>
                              </div>

                              <div class="col-xs-6">
                                  <p>
                                      <b>Full name*:</b>
                                      <textarea [(ngModel)]="book.description" placeholder="description"></textarea>
                                  </p>
                              </div>

                              <div class="col-xs-6">
                                  <p>
                                      <b>Escudo Equipo*:</b>
                                      <input type='text' class="form-control" name='stadium' placeholder="Stadium" id="stadium" [(ngModel)]="book.abstract" required/>
                                  </p>
                              </div>

                              <div class="col-xs-6">
                                  <p>
                                      <b>Imagen Equipo*:</b>
                                      <input type='text' class="form-control" name='capacity' id="capacity" [(ngModel)]="book.imgequipo" required/>
                                  </p>
                              </div>

                              <div class="col-xs-6">
                                  <p>
                                      <b>Location*:</b>
                                      <input type='text' class="form-control" name='location' placeholder="Location" id="location" required/>
                                  </p>
                              </div>

                              <div class="col-xs-6">
                                  <p>
                                      <b>Foundation*:</b>
                                      <input type='number' class="form-control" name='foundation' pattern="[0-9]{4}" min="1800" max="2016" placeholder="Year" id="foundation" required/>
                                  </p>
                              </div>

                              <div class="col-xs-6">
                                  <p>
                                      <b>Nacionality*:</b>
                                      <input type='text' class="form-control" name='nacionality' placeholder="Nacionality" id="nacionality" required/>
                                  </p>
                              </div>

                              <div class="col-xs-6">
                                  <p>
                                      <b>Nickname:</b>
                                      <input type='text' class="form-control" name='nickname' placeholder="Nickname" id="nickname" />
                                  </p>
                              </div>

                              <div class="col-xs-6">
                                  <p>
                                      <b>Number of partners:</b>
                                      <input type='text' class="form-control" name='partners' placeholder="Partners" id="partners" />
                                  </p>
                              </div>

                              <div class="col-xs-6">
                                  <form method="post" enctype="multipart/form-data">
                                      <b>Image:</b>
                                      <input type=file size=60 name="file1">
                                  </form>
                                  <br>
                              </div>

                              <div class="col-xs-12">
                                  <p>Items marked with * will be required by the form.</p>
                              </div>

                              <div class="col-xs-2">
                                  <input (click)="save()" type='submit' name='enviar' value='Submit' />
                              </div>
                              <div class="col-xs-6">
                                <button (click)="cancel()">Cancel</button>
                              </div>
                          </fieldset>
                      </form>
                  </div>
              </div>
          </div>
          <div class="col-md-2 hidden-xs hidden-sm">
              <div id="galeria2">
              </div>
          </div>
      </div>
  </div>
  </div>

  `
})
export class BookFormComponent {

  newBook: boolean;
  book: Book;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: BookService){

      let id = routeParams.get('id');
      if(id){
        service.getBook(id).subscribe(
          book => this.book = book,
          error => console.error(error)
        );
        this.newBook = false;
      } else {
        this.book = new Book(undefined,'','');
        this.newBook = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.saveBook(this.book);
    window.history.back();
  }
}
