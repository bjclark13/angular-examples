import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @Output() submitted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.submitted.emit();
  }

}
