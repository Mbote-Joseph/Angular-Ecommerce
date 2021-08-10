import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddDeleteComponent } from './admin-add-delete.component';

describe('AdminAddDeleteComponent', () => {
  let component: AdminAddDeleteComponent;
  let fixture: ComponentFixture<AdminAddDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
