import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should go to pickUpCalls page on see all... button', () => {
    spyOn(router, 'navigate');
    //llamo al metodo login de la clase LoginPage
    component.pickUpCalls();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls']);
  });

  it('should go to pickUpCall page on + button', () => {
    spyOn(router, 'navigate');
    //llamo al metodo login de la clase LoginPage
    component.newPickUpCall();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call']);
  });
});
