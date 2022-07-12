import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturant-detail-thumbnail',
  templateUrl: './resturant-detail-thumbnail.component.html',
  styleUrls: ['./resturant-detail-thumbnail.component.css']
})
export class ResturantDetailThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() resturantId!: string | null;

}
