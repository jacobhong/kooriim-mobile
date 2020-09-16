import { NgModule, InjectionToken, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/File/ngx';

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
    Camera,
    HTTP,
    File,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
