import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tasks';
  text = 'ThIs TeXt Is A TeSt!';
  percentValue = 0.5;
  date = new Date();
  money = 234;
  user: User = {
    name: 'João',
    age: 56
  };
}
