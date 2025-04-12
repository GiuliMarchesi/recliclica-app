import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      // declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot(), ErrorMessageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
  }));

  it('should show error message on field touch and error present', () => {
    //Para generalizar mas el error, cambio a anyField y anyError
    component.field = new FormGroup({anyField: new FormControl()}); 
    component.field.markAsTouched();
    component.field.setErrors({anyError: true});
    component.error = 'anyError';
    expect(component.shouldShowComponent()).toBeTruthy();
  });  

  it('should hide error message on field not touched', () => {
    //esconder el mensaje de error en el campo no tocado
    component.field = new FormGroup({anyField: new FormControl()}); 
    component.field.setErrors({anyError: true});
    component.error = 'anyError';
    expect(component.shouldShowComponent()).toBeFalsy();
  }); 

  it('should hide error message on field touched, but no errors', () => {
    component.field = new FormGroup({anyField: new FormControl()}); 
    component.field.markAsTouched();
    component.error = 'anyError';
    expect(component.shouldShowComponent()).toBeFalsy();
  }); 

  it('should show error message on field touched and has error, but it is a different error', () => {
    component.field = new FormGroup({anyField: new FormControl()}); 
    component.field.markAsTouched();
    component.field.setErrors({anyError: true});
    component.error = 'anotherError';
    expect(component.shouldShowComponent()).toBeFalsy();
  });  

});
