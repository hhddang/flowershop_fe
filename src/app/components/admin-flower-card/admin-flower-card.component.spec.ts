import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFlowerCardComponent } from './admin-flower-card.component';

describe('AdminFlowerCardComponent', () => {
  let component: AdminFlowerCardComponent;
  let fixture: ComponentFixture<AdminFlowerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFlowerCardComponent]
    });
    fixture = TestBed.createComponent(AdminFlowerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
