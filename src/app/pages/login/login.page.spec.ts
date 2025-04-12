import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoginPage } from './login.page';
//navego del login a la pagina de home
import { Router } from '@angular/router';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  //navego del login a la pagina de home(declaro)
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //navego del login a la pagina de home(inicializo)
    router = TestBed.get(Router);
  });

  it('should create form on init', () => {
    component.ngOnInit();
    expect(component.form).not.toBeUndefined();
  });

  it('should go to home page on login button', () => {
    spyOn(router, 'navigate');
    //llamo al metodo login de la clase LoginPage
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  })

  it('should go to register page on register button', () => {
    spyOn(router, 'navigate');
    //llamo al metodo login de la clase LoginPage
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  })
});
