import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { nextTick } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProdcutDetailGuard implements CanActivate {
  constructor(private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id = +next.url[1].path;
    if(isNaN(id) || id < 1 || id > 10){
      alert("invalid Id");
      this.router.navigate(['/products'])
      return false;
    }
    return true;
  }
}
