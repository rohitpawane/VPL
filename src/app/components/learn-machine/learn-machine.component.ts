import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-learn-machine',
  templateUrl: './learn-machine.component.html',
  styleUrls: ['./learn-machine.component.css']
})
export class LearnMachineComponent implements OnInit {


  url: string;
  requesturl: string;

  constructor( @Inject(MAT_DIALOG_DATA) data: any) {

    console.log("Popup Data :", [data]);
    this.url = data;
  }

  ngOnInit() {
  }


}
