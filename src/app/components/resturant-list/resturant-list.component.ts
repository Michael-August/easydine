import { Component, Input, OnInit } from '@angular/core';
import { IResturant } from 'src/app/models/resturant';
import { ResturantsService } from 'src/app/shared/services/resturants/resturants.service';

@Component({
  selector: 'app-resturant-list',
  templateUrl: './resturant-list.component.html',
  styleUrls: ['./resturant-list.component.css']
})
export class ResturantListComponent implements OnInit {


  resturants: IResturant[] | undefined

  constructor(private resturantservice: ResturantsService) { }

  ngOnInit(): void {
    this.get_resturants()
  }

  get_resturants() {
    this.resturantservice.getResturants().subscribe((res: any) => {
      this.resturants = res
    })
  }

  go_back(){
    window.history.back()
  }

}
