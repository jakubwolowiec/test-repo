import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InqooErrorpageComponent } from './inqoo-errorpage.component';

describe('InqooErrorpageComponent', () => {
  let component: InqooErrorpageComponent;
  let fixture: ComponentFixture<InqooErrorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InqooErrorpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InqooErrorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
