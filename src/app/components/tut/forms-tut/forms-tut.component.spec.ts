import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTutComponent } from './forms-tut.component';

describe('FormsTutComponent', () => {
  let component: FormsTutComponent;
  let fixture: ComponentFixture<FormsTutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsTutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
