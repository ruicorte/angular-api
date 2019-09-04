import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  API_KEY = '57394d3132964a319d7a88700d8d4fd1';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?language=pt&apiKey=${this.API_KEY}`);
  }
}
