import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResturantsService {

  constructor(private http: HttpClient) { }

  getResturants() {
    return this.http.get(`${BASE_URL}/resturants`)
  }

}
