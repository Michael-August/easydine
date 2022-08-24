import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpacesService {

  constructor(private http: HttpClient) { }

  getSpaces() {
    return this.http.get(`${BASE_URL}/spaces`)
  }

  getSpace(id: string) {
    return this.http.get(`${BASE_URL}/spaces/${id}`)
  }
}
