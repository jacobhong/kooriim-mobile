import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';
import { environment } from 'src/environments/environment';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  keycloak = Keycloak('/assets/keycloak.json');

  constructor() { }

  public init() {
    return new Promise((resolve, reject) => {
      this.keycloak.init({
        adapter: 'cordova',
        onLoad: 'login-required',
        promiseType: 'legacy',
        redirectUri: 'http://localhost'
      }).success((s) => {
        console.log(s);
        console.log(this.keycloak.token);
        resolve();
      }).error((err) => {
        console.log('error  ' + err);
        reject(err);
      });
    });
  }

  async getToken() {
    console.log('token refreshing');
    console.log(this.keycloak.token);
    console.log(this.keycloak.idToken);
    console.log(this.keycloak.authenticated);

    await this.keycloak.updateToken(255).success((refreshed) => {
      if (refreshed) {
        console.debug('Token refreshed' + refreshed);
      } else {
        console.warn('Token not refreshed, valid for '
          + Math.round(this.keycloak.tokenParsed.exp + this.keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).error(() => {
      console.error('Failed to refresh token');
    });
    return this.keycloak.token;
  }
}

