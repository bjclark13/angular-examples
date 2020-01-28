import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  showMessage : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('form submitted from the parent!');
    this.showMessage = true;
  }
}
