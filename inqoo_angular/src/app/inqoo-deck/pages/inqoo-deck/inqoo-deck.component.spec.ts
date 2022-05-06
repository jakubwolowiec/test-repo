import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InqooDeckComponent } from './inqoo-deck.component';

describe('InqooDeckComponent', () => {
  let component: InqooDeckComponent;
  let fixture: ComponentFixture<InqooDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InqooDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InqooDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
