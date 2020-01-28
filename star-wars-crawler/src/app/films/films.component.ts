import { Component, OnInit } from '@angular/core';
import {StarWarsService} from '../star-wars.service';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor( private _service : StarWarsService) { }
  films : [];

  ngOnInit() {
    this._service.getFilms().subscribe( (data : any) => this.films = data.results );
  }

}
