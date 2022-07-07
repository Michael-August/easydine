import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IResturant } from 'src/app/models/resturant';
import { closeAsyncLoader, showAsyncLoader } from 'src/app/shared/helpers';
import { ResturantsService } from 'src/app/shared/services/resturants/resturants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resturants: IResturant[] | undefined
  location: string = 'Ikeja'
  national: boolean = true

  searchParams = new FormGroup({
    date: new FormControl(''),
    time: new FormControl(''),
    no_of_people: new FormControl(''),
    search_term: new FormControl('')
  })

  constructor(private resturantservice: ResturantsService, private router: Router) { }

  ngOnInit(): void {
    this.get_resturants()
  }

  get_resturants() {
    showAsyncLoader('please wait...')
    this.resturantservice.getResturants().subscribe((res: any) => {
      this.resturants = res.filter((resturant: IResturant) => resturant.location.city == this.location)
    }).add(closeAsyncLoader())
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
      let key = 'AsVjObCu_ybd5wKva6gWFfi5EHH88z0uFPYB55ToLaLQ8b_IdvzGuDKhm7R_IpnJ'
      let lat = position.coords.latitude
      let long = position.coords.longitude
      fetch(`http://dev.virtualearth.net/REST/v1/Locations/${lat},${long}?key=${key}`)
      .then(res => res.json())
      .then(data => {
        let fullAddress = data.resourceSets[0].resources[0].address
        this.location = fullAddress.adminDistrict2

        showAsyncLoader('please wait...')
        this.resturantservice.getResturants().subscribe((res: any) => {
          this.resturants = res.filter((resturant: IResturant) => resturant.location.city == this.location)
          console.log(this.location);
          
        }).add(closeAsyncLoader())
      })
      
    })
  }

  sendSearch() {
    const param = {
      date: this.searchParams.get('date')?.value,
      time: this.searchParams.get('time')?.value,
      no_of_people: this.searchParams.get('no_of_people')?.value,
      search_term: this.searchParams.get('search_term')?.value
    }

    this.resturantservice.sendSearchParams(param)
    this.router.navigate(['/resturants'])
  }
 
}
