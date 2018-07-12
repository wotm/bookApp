import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../model/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
	private urlServer: string = "http://localhost:5000";
	private books: Book[] = [];

	constructor(private http: HttpClient) { }

	public getBooks() {
   		// renvoie Observable, la souscription se fera côté composant
    	return this.http.get(this.urlServer + '/books');
  	}

  	public getBook(id: number) {
    	return this.http.get(this.urlServer + '/books/' + id);
  	}

  	public setBooks(books: Book[]): Book[] {
  		this.books = books;
  		return this.books;
  	}
}
