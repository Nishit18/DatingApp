/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppOldComponent } from './app-old.component';

describe('AppOldComponent', () => {
  let component: AppOldComponent;
  let fixture: ComponentFixture<AppOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
