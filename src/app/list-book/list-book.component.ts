import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../../model/book.interface';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
	books: Book[] = [];
	booksFiltered: Book[] = [];
	dispoFilter: string = '0';

  	constructor(private bookService: BookService) { }

  	ngOnInit() {
 		this.bookService
  		.getBooks()
  		.subscribe((res: Book[]) => {
  			this.books = res;
        this.bookService.setBooks(this.books);
  		});
  	}

	filterByDispo(e: any) {
		this.dispoFilter = e.target.value;
	}
}
