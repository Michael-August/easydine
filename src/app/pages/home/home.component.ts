import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IResturant } from 'src/app/models/resturant';
import { ResturantsService } from 'src/app/shared/services/resturants/resturants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resturants: IResturant[] | undefined

  constructor(private resturantservice: ResturantsService, private router: Router) { }

  ngOnInit(): void {
    this.get_resturants()
  }

  get_resturants() {
    this.resturantservice.getResturants().subscribe((res: any) => {
      this.resturants = res.filter((resturant: IResturant) => resturant.location.city == 'Ikeja')
    })
  }

  viewAll() {
    this.router.navigate(['/resturants'])
  }

  get_location() {
    if(!navigator.geolocation) {
      return
    }

    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyC514hZSji_mnWxew7ty7jz45K1SWwTwG8`)
      .then(res => res.json())
      .then(data => console.log(data))
      
    })
  }
 
}
