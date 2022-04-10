import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SnackService } from '../service/snack.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private afAuth:AngularFireAuth,
    private snack:SnackService
    ){}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Promise<boolean> {

      const user = await this.afAuth.currentUser;
      const isLoggrdIn = !!user;

      if(!isLoggrdIn){
        this.snack.aurhError();
      }

      return isLoggrdIn;
  }

}
