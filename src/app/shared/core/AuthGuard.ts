import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../service/auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
  constructor(
    private authService:AuthService,
    private router:Router
  ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()){
      return true;
    }else {
      this.router.navigate(['/login'], {queryParams:{accessDenied: true}});
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     return this.canActivate(childRoute, state);
  }

}
