import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  public films: any = [];
  constructor(private http: HttpClient) { }

  public getFilms(){
    return this.http.get('https://ghibliapi.herokuapp.com/films')
    .pipe(catchError(this.handleError));
  }

  public getFilmByID(id){
    return this.http.get('https://ghibliapi.herokuapp.com/films/'+id)
    .pipe(catchError(this.handleError));;
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = 'An Error occurred: ${err.error.message}';
    } else {
      errorMessage = 'Server returned code: ${err.status}, error message is: ${err.message}';
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
