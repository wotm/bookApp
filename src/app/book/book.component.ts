import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
	@Input('data') book = {
      id: 0,
      author: '', 
      title: '', 
      publicationDate: 0,
      available: false, 
      nbPages: 0,
      nbRent: 0
  };

  	@Output('detailBookFlag') detailBookFlag: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  loadDetailBook() {
  	this.detailBookFlag = true;
  }
}
