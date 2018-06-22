import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  model: any=[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required]);
  getErrorMessage1() {
    return this.email.hasError('required') ? ' Username cannot be blank' :
      this.email.hasError('email') ? 'Please provide proper ':'';
  }

  password = new FormControl('', [Validators.required]);
  getErrorMessage2() {
    return this.password.hasError('required') ? ' Password cannot be blank' : ' ';
  }


  login() {

    console.log("Model is ", [this.model]);

    if (this.model.email != undefined && this.model.password != undefined) {
      this.router.navigate(['/mentor']);
    }
    
    

  }
}
