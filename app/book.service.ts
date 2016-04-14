import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Book {

  constructor(
    public id: number,
    public title: string,
    public abstract: string,
    public imgequipo: string,
    public description: string,) {}

}

@Injectable()
export class BookService {

  private books = [
  	new Book(1, 'New York City', 'http://futhead.cursecdn.com/static/img/15/clubs/689.png', 'https://elrincondejoost.files.wordpress.com/2014/04/red-bulls-ny.jpg', 'El New York City es un club de fútbol de Estados Unidos de la ciudad de New York, en Nueva York. Fue fundado en 1992 por la familia Saputo y juega actualmente en la Conferencia Este de la Major League Soccer.'),
  	new Book(2, 'Montreal Impact','http://www.bold.dk/img/tag/64x64/758.png', 'http://www.elfinanciero.com.mx/files/article_main/uploads/2015/04/27/553eeea70d488.jpg', 'El Montreal es un club de fútbol de Canadá de la ciudad de Montreal, en Quebec. Fue fundado en 1992 por la familia Saputo y juega actualmente en la Conferencia Este de la Major League Soccer.'),
  	new Book(3, 'Columbus Crew', 'http://www.moddingway.com/fifadb/teams/l687.png', 'https://s3.amazonaws.com/user-media.venngage.com/305423-48ce8432e479aa7c2e7789bf07c0f307.jpg', 'El Columbus Crew es un club de fútbol de Estados Unidos de la ciudad de Columbus, en Columbia. Fue fundado en 1992 por la familia Saputo y juega actualmente en la Conferencia Este de la Major League Soccer.'),
  ];

  getBooks() {
    return withObserver(this.books);
  }

  getBook(id: number | string) {
    let book = this.books.filter(h => h.id === +id)[0]
    return withObserver(new Book(book.id, book.title, book.abstract, book.imgequipo, book.description));
  }

  removeBook(book: Book){
    for(let i=0; i<this.books.length; i++){
        if(this.books[i].id === book.id){
          this.books.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  saveBook(book: Book){
    if(book.id){
      let oldBook = this.books.filter(h => h.id === book.id)[0];
      oldBook.title = book.title;
      oldBook.abstract = book.abstract;
      oldBook.imgequipo = book.imgequipo;
      oldBook.description = book.description;
    } else {
      book.id = this.books.length+1;
      this.books.push(book);
    }
    return withObserver(book);
  }
}
