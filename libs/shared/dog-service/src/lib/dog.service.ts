import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) {}

  getRandomDog() {
    return this.http.get<any>('https://dog.ceo/api/breeds/image/random');
  }
}
