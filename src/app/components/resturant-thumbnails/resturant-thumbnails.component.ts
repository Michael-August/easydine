import { Component, Input, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { IResturant } from 'src/app/models/resturant';

@Component({
  selector: 'app-resturant-thumbnails',
  templateUrl: './resturant-thumbnails.component.html',
  styleUrls: ['./resturant-thumbnails.component.css']
})
export class ResturantThumbnailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() resturantThumbnail: IResturant[] | undefined

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
