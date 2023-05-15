import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  constructor( ) {
    this.initializeApp();
  }

  initializeApp() {
/*    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#004179');
      this.splashScreen.hide();
    });*/
  }
}
