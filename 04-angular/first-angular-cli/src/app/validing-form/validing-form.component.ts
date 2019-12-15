import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validing-form',
  templateUrl: './validing-form.component.html',
  styleUrls: ['./validing-form.component.css']
})
export class ValidingFormComponent implements OnInit {

  name = '';
  email = '';


  constructor() { }

  ngOnInit() {
  }

}
