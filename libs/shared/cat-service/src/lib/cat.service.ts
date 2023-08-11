import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { PrivateCatService } from './private-cat.service';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient, private privateCat: PrivateCatService) {}

  getRandomCat() {
    this.privateCat.call();
    return this.http.get('https://api.thecatapi.com/v1/images/search')
      .pipe(map((res: any) => res[0]));
  }
}
