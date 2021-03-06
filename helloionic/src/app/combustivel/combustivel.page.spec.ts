import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustivelPage } from './combustivel.page';

describe('CombustivelPage', () => {
  let component: CombustivelPage;
  let fixture: ComponentFixture<CombustivelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombustivelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombustivelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
