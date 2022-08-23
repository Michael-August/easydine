import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResturantListComponent } from '../app/components/resturant-list/resturant-list.component';
import { ResturantThumbnailsComponent } from '../app/components/resturant-thumbnails/resturant-thumbnails.component';
import { ResturantDetailComponent } from './components/resturant-detail/resturant-detail.component';
import { ResturantDetailThumbnailComponent } from './components/resturant-detail-thumbnail/resturant-detail-thumbnail.component';
import { SpaceDetailComponent } from '../app/pages/space-detail/space-detail.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { SpacesComponent } from './pages/resturant-detail/resturant-detail.component';
import { ResturantsComponent } from './pages/resturants/resturants.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RatingModule } from 'ng-starrating';
import { SpaceListComponent } from './components/space-list/space-list.component';
import { SpaceThumbnailComponent } from './components/space-thumbnail/space-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    ResturantListComponent,
    ResturantThumbnailsComponent,
    ResturantDetailComponent,
    ResturantDetailThumbnailComponent,
    SpaceDetailComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    SpacesComponent,
    ResturantsComponent,
    SpaceListComponent,
    SpaceThumbnailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
