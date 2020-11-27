import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowPageComponent } from './grow-page.component';

describe('GrowPageComponent', () => {
  let component: GrowPageComponent;
  let fixture: ComponentFixture<GrowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
