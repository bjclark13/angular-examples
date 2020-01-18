import { Component, OnInit, Input } from '@angular/core';
import {ITransaction} from '../app.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor() { }

  @Input() transaction : ITransaction;

  ngOnInit() {
  }

}
