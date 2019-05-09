import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversaoPage } from './conversao.page';

describe('ConversaoPage', () => {
  let component: ConversaoPage;
  let fixture: ComponentFixture<ConversaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
