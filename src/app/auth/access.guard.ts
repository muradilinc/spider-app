import {inject} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

export const canActivate = () => {
  const isLoginIn = inject(AuthService).isAuth;

  if (isLoginIn) {
    return true;
  }

  return inject(Router).createUrlTree(['/login']);
}
