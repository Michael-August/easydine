import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resturant-detail',
  templateUrl: './resturant-detail.component.html',
  styleUrls: ['./resturant-detail.component.css']
})
export class ResturantDetailComponent implements OnInit {

  resturantId!: string | null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.resturantId = this.activatedRoute.snapshot.paramMap.get('id')
  }

  // getResturant(resturantId) {
    
  // }

}
