import {Component} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']})
export class AppComponent {

  onRe
  private screenWidth: number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  private screenHeight: number = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}
