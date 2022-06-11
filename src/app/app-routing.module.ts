import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HotelsPageComponent } from './components/pages/hotels-page/hotels-page.component';
import { RoomsPageComponent } from './components/pages/rooms-page/rooms-page.component';


const routes: Routes = [
  { path: '',component: HomePageComponent},
  { path: 'hotels',component: HotelsPageComponent},
  { path: 'rooms',component: RoomsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
