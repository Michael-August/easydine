import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-thumbnails',
  templateUrl: './space-thumbnails.component.html',
  styleUrls: ['./space-thumbnails.component.css']
})
export class SpaceThumbnailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() resturantId!: string | null;

}
