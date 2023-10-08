import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerPageComponent } from './flower-page.component';

describe('FlowerPageComponent', () => {
  let component: FlowerPageComponent;
  let fixture: ComponentFixture<FlowerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowerPageComponent]
    });
    fixture = TestBed.createComponent(FlowerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
