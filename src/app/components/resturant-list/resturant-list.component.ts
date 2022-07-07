import { Component, OnInit } from '@angular/core';
import { IResturant } from 'src/app/models/resturant';
import { closeAsyncLoader, showAsyncLoader } from 'src/app/shared/helpers';
import { ResturantsService } from 'src/app/shared/services/resturants/resturants.service';

@Component({
  selector: 'app-resturant-list',
  templateUrl: './resturant-list.component.html',
  styleUrls: ['./resturant-list.component.css']
})
export class ResturantListComponent implements OnInit {

  param: any
  searched = false
  resturants: IResturant[] | undefined

  constructor(private resturantservice: ResturantsService) { }

  ngOnInit(): void {
    this.get_resturants()
    this.receiveSearch()
  }

  get_resturants() {
    // if (this.searched == true) {
    //   this.receiveSearch()
    // }
    
    showAsyncLoader('processing, please wait...')
    this.resturantservice.getResturants().subscribe((res: any) => {
      this.resturants = res
    }).add(closeAsyncLoader())

  }

  receiveSearch() {
    this.searched = true
    this.resturantservice.receiveSearchParams().subscribe(res => {
      this.param = res
      console.log(this.param);
      
      // showAsyncLoader('processing, please wait...')
      // this.resturantservice.getResturants().subscribe((res: any) => {
      //   this.resturants = res.filter((resturant: IResturant) => resturant.name == this.param.search_term)
      //   console.log(this.resturants);
        
      // }).add(closeAsyncLoader())
    })
  }

}
