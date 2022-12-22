import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../hero.model';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient) {}

  getAllHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${environment.backendUrl}/hero`);
  }

  createHero(heroDto: Hero): Observable<Partial<Hero>> {
    return this.http.post<Partial<Hero>>(
      `${environment.backendUrl}/hero`,
      heroDto
    );
    }

    deleteHero(id: Number): Observable<Partial<Hero>> {
    return this.http.delete(
      `${environment.backendUrl}/hero/${id}`
    );
    }
}
