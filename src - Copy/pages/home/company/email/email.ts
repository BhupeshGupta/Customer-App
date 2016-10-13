import {Component} from '@angular/core';


@Component({
  templateUrl: 'email.html'
})
export class EmailPage {
    name: string;
  constructor() {

  }
  openPage(page) {
      this.name = page.title;
  }
}
