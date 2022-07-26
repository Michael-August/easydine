import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResturantsService {

  private subject = new Subject()

  constructor(private http: HttpClient) { }

  getResturants() {
    return this.http.get(`${BASE_URL}/resturants`)
  }

  getResturantsWithParams(param: any) {
    return this.http.get(`${BASE_URL}/resturants?name=${param.search_term}`)
  }

  getResturant(id: string) {
    return this.http.get(`${BASE_URL}/resturants/${id}`)
  }

  sendSearchParams(params: any) {
    this.subject.next(params)
  }

  receiveSearchParams() {
    return this.subject.asObservable()
  }

}
