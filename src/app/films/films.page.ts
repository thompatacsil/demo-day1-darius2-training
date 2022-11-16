import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films: any = [];
  public filmSub: Subscription = new Subscription();

  constructor(
    private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.filmSub.add(
      this.filmsService.getFilms()
      .subscribe(
        data => {
        console.log(data);
        this.films = data;
      },
        error => {
          console.log(error)
        }
      )
    )
  }
}
