import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrivateCatService {
  call() {
    console.log('private cat service called');
  }
}
