import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { admobAnuncios } from 'src/assets/providers/admob-anuncios';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';


//https://www.npmjs.com/package/ng2-pdf-viewer
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SocialSharing,
    AdMobFree,
    admobAnuncios,
    InAppBrowser
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
