import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredComponent } from './preferred.component';

describe('PreferredComponent', () => {
  let component: PreferredComponent;
  let fixture: ComponentFixture<PreferredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreferredComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
