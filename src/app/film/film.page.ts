import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {
  id: any;
  film: any = [];

  constructor(
     private activatedRoute: ActivatedRoute,
     private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.filmsService.getFilmByID(this.id)
    .subscribe(data => {
      this.film = data;
      console.log(this.film);
    })
  }

}
