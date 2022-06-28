import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-space-list',
  templateUrl: './space-list.component.html',
  styleUrls: ['./space-list.component.css']
})
export class SpaceListComponent implements OnInit {

  resturantId!: string | null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.resturantId = this.activatedRoute.snapshot.paramMap.get('id')
  }

}
