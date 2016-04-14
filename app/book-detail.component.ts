import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Book, BookService}   from './book.service';

@Component({
    templateUrl: 'app/html/probando.component.html',
    styleUrls: ['app/css/equipo.component.css'],
    directives: [ROUTER_DIRECTIVES],
})
export class BookDetailComponent {

    book: Book;

    constructor(private router: Router, routeParams: RouteParams, private service: BookService) {
        let id = routeParams.get('id');
        service.getBook(id).subscribe(
            book => this.book = book,
            error => console.error(error)
        );
    }

    removeBook() {
        let okResponse = window.confirm("Do you want to remove this book?");
        if (okResponse) {
            this.service.removeBook(this.book).subscribe(
                _ => this.router.navigate(['Teams']),
                error => console.error(error)
            )
        }
    }

    editBook() {
        this.router.navigate(['BookEdit', { id: this.book.id }]);
    }

    gotoBooks() {
        this.router.navigate(['Teams']);
    }

  	gotoFormJugador() {
      this.router.navigate(['FormJugador']);
    }
}
