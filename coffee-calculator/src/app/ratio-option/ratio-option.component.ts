import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ratio-option',
  templateUrl: './ratio-option.component.html',
  styleUrls: ['./ratio-option.component.css']
})
export class RatioOptionComponent implements OnInit {

  @Input()
  ratio : number;

  @Input()
  selected : boolean;

  constructor() { }

  ngOnInit() {
  }

}
