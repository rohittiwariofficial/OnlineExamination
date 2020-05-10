import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamAdminComponent } from './exam-admin.component';

describe('ExamAdminComponent', () => {
  let component: ExamAdminComponent;
  let fixture: ComponentFixture<ExamAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
