import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from '../services/book.service';
import { switchMap } from 'rxjs/operators';
import { Book } from '../../model/book.interface';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
	book: Book = null;
	constructor(private router: Router, private activatedRoute: ActivatedRoute, private bookService: BookService) { }

	ngOnInit() {
		this.activatedRoute.paramMap
		.pipe(
		  	switchMap((params: ParamMap) => {
		  	return this.bookService
		  	.getBook(parseInt(params.get('id')));
		  	})
		 )
		.subscribe((res: Book) => this.book = res);
	}
}
