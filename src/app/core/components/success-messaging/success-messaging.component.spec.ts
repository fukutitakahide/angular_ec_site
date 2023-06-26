import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessMessagingComponent } from './success-messaging.component';

xdescribe('SuccessMessagingComponent', () => {
  let component: SuccessMessagingComponent;
  let fixture: ComponentFixture<SuccessMessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessMessagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
