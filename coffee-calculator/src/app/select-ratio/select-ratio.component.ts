import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-ratio',
  templateUrl: './select-ratio.component.html',
  styleUrls: ['./select-ratio.component.css']
})
export class SelectRatioComponent implements OnInit {

  constructor() {
    this.selectedRatio = this.preferredRatio;
  }

  ratios: number[] = [14, 15, 16, 17];
  preferredRatio: number = 17;
  selectedRatio: number;

  gramsOfWater : number = 0;

  ngOnInit() {
  }

  selectionOption(ratio) {
    this.selectedRatio = ratio;
  }

  setGrams(gramsOfWater) {
    this.gramsOfWater = gramsOfWater;
  }
}
