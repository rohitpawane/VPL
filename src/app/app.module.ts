import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';

import { AppMaterial } from './appmaterial.module';
import { AppRouting } from './app.routing';


import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule

} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MentorHomeComponent } from './components/mentor-home/mentor-home.component';
import { LearnMachineComponent } from './components/learn-machine/learn-machine.component';
import { SafePipe } from 'src/app/pipes/safepipe.pipe';
import { LearnerHomeComponent } from './components/learner-home/learner-home.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LearnerListComponent } from './components/learner-list/learner-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    MentorHomeComponent,
    LearnMachineComponent,
    SafePipe,
    LearnerHomeComponent,
    AdminComponent,
    SignupComponent,
    LearnerListComponent
  ],
  imports: [
    BrowserModule,
    AppMaterial,
    AppRouting,

    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
