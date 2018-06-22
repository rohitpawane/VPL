import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { LearnMachineComponent } from 'src/app/components/learn-machine/learn-machine.component';


@Component({
  selector: 'app-mentor-home',
  templateUrl: './mentor-home.component.html',
  styleUrls: ['./mentor-home.component.css']
})
export class MentorHomeComponent implements OnInit {


  screenWidth: number;


  constructor(private breakpointObserver: BreakpointObserver, private dialog: MatDialog) {

    this.screenWidth = window.innerWidth;
    window.onresize = () =>
    {
      this.screenWidth = window.innerWidth;
    }
  }

  ngOnInit() {
  }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
    map(result => result.matches)
    );


  openDialog()
  {
    let dialog = this.dialog.open(LearnMachineComponent,
      {
        width: '800px',
        height: '500px',
        data:"https://www.youtube.com/embed/watch?v=z4JUm0Bq9AM"
      });
  }

}
