import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BASICS';
  img = "https://picsum.photos/seed/picsum/200/300"


  getName() {
    return this.title
  }

  changeImage(err: KeyboardEvent) {
    this.img = (err.target as HTMLInputElement).value
  }

}
