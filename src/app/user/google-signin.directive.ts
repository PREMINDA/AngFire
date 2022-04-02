import { Directive } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private afAuth:AngularFireAuth) { }

}
