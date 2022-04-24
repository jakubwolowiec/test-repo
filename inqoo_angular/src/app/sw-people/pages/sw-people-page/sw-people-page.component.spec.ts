import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwPeoplePageComponent } from './sw-people-page.component';

describe('SwPeoplePageComponent', () => {
  let component: SwPeoplePageComponent;
  let fixture: ComponentFixture<SwPeoplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwPeoplePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwPeoplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
