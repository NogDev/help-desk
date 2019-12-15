import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidingFormComponent } from './validing-form.component';

describe('ValidingFormComponent', () => {
  let component: ValidingFormComponent;
  let fixture: ComponentFixture<ValidingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
