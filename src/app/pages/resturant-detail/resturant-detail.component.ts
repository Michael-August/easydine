import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spaces',
  templateUrl: './resturant-detail.component.html',
  styleUrls: ['./resturant-detail.component.css']
})
export class SpacesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  back() {
    window.history.back()
  }

}
