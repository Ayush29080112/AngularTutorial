import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerElementComponentComponent } from './server-element-component.component';

describe('ServerElementComponentComponent', () => {
  let component: ServerElementComponentComponent;
  let fixture: ComponentFixture<ServerElementComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerElementComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerElementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
