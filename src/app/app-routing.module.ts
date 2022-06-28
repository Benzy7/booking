import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/admin/clients/clients.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HotelsComponent } from './components/admin/hotels/hotels.component';
import { RoomsComponent } from './components/admin/rooms/rooms.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HotelsPageComponent } from './components/pages/hotels-page/hotels-page.component';
import { InscriPageComponent } from './components/pages/inscri-page/inscri-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RoomsPageComponent } from './components/pages/rooms-page/rooms-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginPageComponent},
      { path: 'inscri', component: InscriPageComponent}
    ]
  },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomePageComponent},
      { path: 'hotels', component: HotelsPageComponent},
      { path: 'rooms', component: RoomsPageComponent}
    ]
  },

  //admin
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'hotels', component: HotelsComponent},
      { path: 'rooms', component: RoomsComponent},
      { path: 'clients', component: ClientsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
