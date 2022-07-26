import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResturantsService } from 'src/app/shared/services/resturants/resturants.service';

@Component({
  selector: 'app-resturant-detail',
  templateUrl: './resturant-detail.component.html',
  styleUrls: ['./resturant-detail.component.css']
})
export class ResturantDetailComponent implements OnInit {

  resturantId: any
  resturant: any

  constructor(private activatedRoute: ActivatedRoute, private resturants: ResturantsService) { }

  ngOnInit(): void {
    this.resturantId = this.activatedRoute.snapshot.paramMap.get('id')
    this.getResturant(this.resturantId)
  }

  getResturant(resturantId: string) {
    this.resturants.getResturant(resturantId).subscribe((res:any) => {
      this.resturant = res
    })
  }

}
