import { Component, Input, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';


@Component({
  selector: 'app-resturant-detail-thumbnail',
  templateUrl: './resturant-detail-thumbnail.component.html',
  styleUrls: ['./resturant-detail-thumbnail.component.css']
})
export class ResturantDetailThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() resturant: any; 
  openModal: boolean = false 

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  toggleModal() {
    this.openModal = !this.openModal
    console.log('click')
  }

}
