import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InqooSearchbarComponent } from './inqoo-searchbar.component';

describe('InqooSearchbarComponent', () => {
  let component: InqooSearchbarComponent;
  let fixture: ComponentFixture<InqooSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InqooSearchbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InqooSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
