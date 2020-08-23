import { NgModule, InjectionToken, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
// import { InAppBrowser, InAppBrowserOriginal } from '@ionic-native/in-app-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakService } from './keycloak/keycloak.service';
// export function kcFactory(keycloakService: KeycloakService) {
//   return () =>  keycloakService.init();
// }
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
