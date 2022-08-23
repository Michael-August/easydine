import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturants',
  templateUrl: './resturants.component.html',
  styleUrls: ['./resturants.component.css']
})
export class ResturantsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  go_back() {
  window.history.back()
    
  }

}
