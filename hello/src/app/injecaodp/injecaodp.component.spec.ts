import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjecaodpComponent } from './injecaodp.component';

describe('InjecaodpComponent', () => {
  let component: InjecaodpComponent;
  let fixture: ComponentFixture<InjecaodpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjecaodpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjecaodpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
