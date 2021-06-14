import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvencomponentComponent } from './evencomponent.component';

describe('EvencomponentComponent', () => {
  let component: EvencomponentComponent;
  let fixture: ComponentFixture<EvencomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvencomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvencomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
