import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninComponent } from 'src/app/components/signin/signin.component';
import { MentorHomeComponent } from 'src/app/components/mentor-home/mentor-home.component';
import { LearnMachineComponent } from 'src/app/components/learn-machine/learn-machine.component';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { SignupComponent } from 'src/app/components/signup/signup.component';
import { LearnerListComponent } from 'src/app/components/learner-list/learner-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'admin', pathMatch:'full' },
      { path: 'login', component: SigninComponent },
      { path: 'learner', component: LearnerListComponent },
      {
        path: 'admin', component: AdminComponent, children: [
          {
            path: 'reg', component: SignupComponent
          }
        ]
      },
      {
        path: 'mentor', component: MentorHomeComponent,
        children:
          [
            { path: 'learn', component: LearnMachineComponent }
          ]
      }
    ])
  ],
  exports: [RouterModule]
})

export class AppRouting {

}
