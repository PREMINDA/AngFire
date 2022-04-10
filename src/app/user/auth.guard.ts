import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private afAuth:AngularFireAuth,
    ){}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Promise<boolean> {

      const user = await this.afAuth.currentUser;
      const isLoggrdIn = !!user;

      return isLoggrdIn;
  }

}
