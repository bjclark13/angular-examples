import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-cups',
  templateUrl: './select-cups.component.html',
  styleUrls: ['./select-cups.component.css']
})
export class SelectCupsComponent implements OnInit {

  constructor() { }

  ounceToGrams : number = 30;
  cupToOunce : number = 8;

  ounces : number;

  @Output()
  grams = new EventEmitter<number>();

  ngOnInit() {
    this.ounces = 8;
    this.setGrams();
  }

  addCup() {
    this.ounces += 8;
    this.setGrams();
  }

  setGrams() {
    this.grams.emit(this.ounces * this.ounceToGrams);
  }

  subtractCup() {
    if ( this.ounces > 0 ) {
      this.ounces -= 8;
    }

    this.setGrams()
  }
}
