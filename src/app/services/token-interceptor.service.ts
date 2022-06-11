import { Injectable , Injector} from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injecor : Injector) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

		let token = localStorage.getItem('_token');

		//IF REQUEST DOESNT HAVE AN Authorization

		if(token &&  req.url.indexOf(environment.api) != -1){
			let tokenizedReq = req.clone({
				setHeaders:{
					Authorization : "Token " + token,
					'Accept-Language':"fr"
				}
			})
			return next.handle(tokenizedReq);
		}
		else {
			return next.handle(req)
		}

	}
}
