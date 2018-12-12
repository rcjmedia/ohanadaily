import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';

import { PreferredComponent } from './preferred.component';

describe('PreferredComponent', () => {
  let component: PreferredComponent;
  let fixture: ComponentFixture<PreferredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(PreferredComponent)],
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
