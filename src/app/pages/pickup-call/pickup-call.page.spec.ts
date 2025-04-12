import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickupCallPage } from './pickup-call.page';
import { Router } from '@angular/router';

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should go to gome on create new pick up call', () => {
    spyOn(router, 'navigate');
    component.goHome();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
