import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Book, BookService}   from './book.service';

@Component({
  selector: 'teams',
  directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/html/teams.component.html',
  styleUrls: ['app/css/teams.component.css']
})

export class TeamsComponent implements OnInit {
  books: Book[];

  constructor(private router:Router, private service: BookService) {}

  ngOnInit(){
      this.service.getBooks().subscribe(
        books => this.books = books,
        error => console.log(error)
      );
    }

    newBook() {
      this.router.navigate(['BookNew']);
    }
}
