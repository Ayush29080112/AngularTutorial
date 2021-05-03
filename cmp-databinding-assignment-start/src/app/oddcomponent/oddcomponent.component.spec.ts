import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddcomponentComponent } from './oddcomponent.component';

describe('OddcomponentComponent', () => {
  let component: OddcomponentComponent;
  let fixture: ComponentFixture<OddcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OddcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
