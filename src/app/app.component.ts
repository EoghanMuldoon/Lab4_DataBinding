import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'data-binding-app';
  counter: number = 0;
  hide: boolean = false;


  OnButtonClick() {
    console.log("Button");
    this.counter++;
  }

  Doubleclick() {
    console.log("double");
    if (this.hide == false) {
      this.hide = true;
    }
    else {
      this.hide = false;
    }
  }
}
