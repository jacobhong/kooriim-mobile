import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';
import { environment } from 'src/environments/environment';
// import Keycloak from 'keycloak-js';
// export const Keycloak = Keycloak_;
// const Keycloak = require('keycloak-js');
import Keycloak from 'keycloak-js';
// export const Keycloak = Keycloak_;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  constructor() { }

  // private kk: Keycloak.KeycloakPromiseType;
  keycloak = Keycloak('/assets/keycloak.json');
  // keycloak = Keycloak('/assets/keycloak.json');
  public init() {
    console.log('hihffffi');
    console.log(this.keycloak);
    return new Promise((resolve, reject) => {
      this.keycloak.init({
        adapter: 'cordova',
        onLoad: 'login-required',
        promiseType: 'legacy',
        redirectUri: 'http://localhost'
      }).success((s) => {
        console.log('SUCCESSS');
        console.log(this.keycloak.token);
        console.log(this.keycloak.idToken);
        console.log(this.keycloak.authenticated);
        resolve();
      }).error((err) => {
        console.log('FUCKING ERROR' + err);
        reject(err);
      });
    });
  }

  // const config = {
  //   promiseType: 'native',
  //   adapter: 'cordova',
  //   url: 'https://keycloafk.kooriim.com:8443/auth',
  //   realm: 'kooriim-mobile',
  //   clientId: 'kooriim-mobile'
  // };
  // this.kk = Keycloak(config);
  // console.log(this.kk);
  // this.kk.init(
  //   {
  //     onLoad: 'check-sso'
  //   }
  // ).

  // .success((isLoggedin) => {
  //   console.log('success');
  // }).error(error => {
  //   console.log('erfwefwefewror ' + error);
  // });
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

