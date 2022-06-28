import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HotelsPageComponent } from './components/pages/hotels-page/hotels-page.component';
import { RoomsPageComponent } from './components/pages/rooms-page/rooms-page.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HotelsComponent } from './components/admin/hotels/hotels.component';
import { RoomsComponent } from './components/admin/rooms/rooms.component';
import { ClientsComponent } from './components/admin/clients/clients.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { InscriPageComponent } from './components/pages/inscri-page/inscri-page.component';

const customNotifierOptions: NotifierOptions = {
	position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
	theme: 'material',
	behaviour: {
		autoHide: 5000,
		onClick: false,
		onMouseover: 'pauseAutoHide',
		showDismissButton: true,
		stacking: 4
	},
	animations: {
		enabled: true,
		show: {
			preset: 'slide',
			speed: 300,
			easing: 'ease'
		},
		hide: {
			preset: 'fade',
			speed: 300,
			easing: 'ease',
			offset: 50
		},
		shift: {
			speed: 300,
			easing: 'ease'
		},
		overlap: 150
	}
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    HotelsPageComponent,
    RoomsPageComponent,
    DashboardComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    HotelsComponent,
    RoomsComponent,
    ClientsComponent,
    LoginPageComponent,
    InscriPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NotifierModule.withConfig( customNotifierOptions )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
