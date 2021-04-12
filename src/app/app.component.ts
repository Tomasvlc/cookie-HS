import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'integrationHS';

  accepetCookie() {
    console.log('cookies accepted')
  }

  declineCookie() {
    console.log('cookies declined')
  }
}
