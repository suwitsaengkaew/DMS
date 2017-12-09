/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DmspdfviewerComponent } from './dmspdfviewer.component';

describe('DmspdfviewerComponent', () => {
  let component: DmspdfviewerComponent;
  let fixture: ComponentFixture<DmspdfviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmspdfviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmspdfviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
