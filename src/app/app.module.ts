import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResturantListComponent } from '../app/components/resturant-list/resturant-list.component';
import { ResturantThumbnailsComponent } from '../app/components/resturant-thumbnails/resturant-thumbnails.component';
import { SpaceListComponent } from '../app/components/space-list/space-list.component';
import { SpaceThumbnailsComponent } from '../app/components/space-thumbnails/space-thumbnails.component';
import { SpaceDetailComponent } from '../app/pages/space-detail/space-detail.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { SpacesComponent } from './pages/spaces/spaces.component';
import { ResturantsComponent } from './pages/resturants/resturants.component';

@NgModule({
  declarations: [
    AppComponent,
    ResturantListComponent,
    ResturantThumbnailsComponent,
    SpaceListComponent,
    SpaceThumbnailsComponent,
    SpaceDetailComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    SpacesComponent,
    ResturantsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
