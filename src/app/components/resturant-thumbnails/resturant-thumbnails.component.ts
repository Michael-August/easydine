import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

}
