import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PiratasService {
  constructor(private http: HttpClient) { }
getAllPiratas() {
    return this.http.get(`https://api.api-onepiece.com/v2/characters/en`)
  }
}
