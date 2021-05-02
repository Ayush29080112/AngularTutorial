import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerFormComponentComponent } from './server-form-component.component';

describe('ServerFormComponentComponent', () => {
  let component: ServerFormComponentComponent;
  let fixture: ComponentFixture<ServerFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
