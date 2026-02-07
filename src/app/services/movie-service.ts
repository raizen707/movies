import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient ) {}
  private apiUrl = 'https://api.example.com/movies';
  private carteleraPage = 1;
  public cargando = false;

  getParams() { 
    return {
      api_key: "d070e0fd80422b7ae7c2736a6da2b92e",
      languaje: "es-ES",
      page: this.carteleraPage.toString(),
    };
  }
  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

  getCartelera():Observable<Movie[]> {
    if (this.cargando) {
      return of([]);
    }
    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${this.apiUrl}/now_playing`, {
      params: this.getParams(),
    }).pipe(
      map((resp) => resp.results),
      tap(() => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    );
  }
  buscarPeliculas(texto: string): Observable<Movie[]> {
    const params = { ...this.getParams(), page: '1', query: texto };
    return this.http
      .get<CarteleraResponse>(`${this.apiUrl}/search`, { params })
      .pipe(map((resp: { results: any; }) => resp.results));
  } 

  getPeliculaDetalle(id: string): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.apiUrl}/${id}`, {
      params: this.getParams(),
    });
  }

  getCast(id: string): Observable<CreditResponse> {
    return this.http
      .get<CreditResponse>(`${this.apiUrl}/${id}/credits`, {
        params: this.getParams(),
      });
  }
}