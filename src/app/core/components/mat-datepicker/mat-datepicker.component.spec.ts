import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDatepickerComponent } from './mat-datepicker.component';

xdescribe('MatDatepickerComponent', () => {
  let component: MatDatepickerComponent;
  let fixture: ComponentFixture<MatDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
