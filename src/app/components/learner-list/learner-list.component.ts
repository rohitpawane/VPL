import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learner-list',
  templateUrl: './learner-list.component.html',
  styleUrls: ['./learner-list.component.css']
})
export class LearnerListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['Name', 'Fellowship', 'City'];
  dataSource = ELEMENT_DATA;

}


export interface PeriodicElement {
  Name: string;
  Fellowship: string;
  City: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Name: "Poonam", Fellowship: 'Yes', City: 'Mumbai'},
  { Name: "Madhuri", Fellowship: 'Yes', City: 'Mumbai'},
  { Name: "Nilesh", Fellowship: 'Yes', City: 'Mumbai'},
  { Name: "Rakesh", Fellowship: 'Yes', City: 'Mumbai'},
  { Name: "Shiv", Fellowship: 'Yes', City: 'Mumbai'},
  { Name: "Pushpa", Fellowship: 'Yes', City: 'Mumbai' },
  { Name: "Swapnil", Fellowship: 'Yes', City: 'Mumbai'},
  { Name: "Vimlesh", Fellowship: 'Yes', City: 'Mumbai'},
  { Name: "Jaspreet", Fellowship: 'Yes', City: 'Mumbai' },
  { Name: "Zeeshan", Fellowship: 'Yes', City: 'Mumbai'}
   ];
