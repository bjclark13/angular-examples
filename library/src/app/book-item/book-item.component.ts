import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../ibook';
import { BookService} from '../book.service';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book : IBook;

  constructor(public service : BookService) { }

  ngOnInit() {}

  toggleWishList() {
    this.service.toggleWishList(this.book);
  }
}
