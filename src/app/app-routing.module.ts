import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceDetailComponent } from './components/space-detail/space-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { ResturantsComponent } from './pages/resturants/resturants.component';
import { SpacesComponent } from './pages/spaces/spaces.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'resturants', component: ResturantsComponent },
	{ path: 'resturants/:id', component: SpacesComponent },
	{ path: 'resturants/:id/space', component: SpaceDetailComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled'
        })
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
