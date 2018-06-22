import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  fellowshipprogram: Array<string> = ["Fellowship Program", "Fellowship Program", "Fellowship Program", "Fellowship Program"];


  constructor() { }

  ngOnInit() {
  }

}
