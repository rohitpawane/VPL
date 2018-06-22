import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMachineComponent } from './learn-machine.component';

describe('LearnMachineComponent', () => {
  let component: LearnMachineComponent;
  let fixture: ComponentFixture<LearnMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
