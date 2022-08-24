import { Component, Input, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { SpacesService } from 'src/app/shared/services/spaces/spaces.service';


@Component({
  selector: 'app-resturant-detail-thumbnail',
  templateUrl: './resturant-detail-thumbnail.component.html',
  styleUrls: ['./resturant-detail-thumbnail.component.css']
})
export class ResturantDetailThumbnailComponent implements OnInit {
  space: any;
  spaces: any = [];

  constructor(private spacesService: SpacesService) { }

  ngOnInit(): void {
    this.getSpaces();
  }

  @Input() resturant: any; 
  openModal: boolean = false 

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  getSpaces() {
    this.spacesService.getSpaces().subscribe((res)=>{
      this.spaces = res
      console.log(res);
      
    })
  }

  showSpace(id:string) {
    this.openModal = !this.openModal;
    this.spacesService.getSpace(id).subscribe((res)=>{
      this.space = res
      console.log(res);
      
    })
  }

  toggleModal() {
    this.openModal = !this.openModal
    console.log('click')
  }

}
