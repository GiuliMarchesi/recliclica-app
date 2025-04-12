import { LoginPageform } from './login.page.form';
import { FormBuilder, FormGroup } from '@angular/forms';

describe('LoginPageform', () => {  
    //con el before hago que se ejecute antes de cada test (IT)
    //para no tener que ponerlo dentro de cada IT
    //ahora voy a validar que el campo email sea un email
    let loginPageform: LoginPageform;
    let form: FormGroup;
    beforeEach(() => {
        loginPageform = new LoginPageform(new FormBuilder());
        form = loginPageform.createForm();
        
    });

    it('should create login form empty', () => {

        //Aca espero que el return de la funcion createForm no sea null
        expect(form).not.toBeNull();
        //espero que el campo email no sea null
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email')?.value).toEqual("");
        //indico que el campo email tiene campos requeridos
        expect(form.get('email')?.valid).toBeFalsy();


        expect(form.get('password')).not.toBeNull();
        //espero que el valor del campo password sea igual a vacio
        expect(form.get('password')?.value).toEqual("");
        expect(form.get('password')?.valid).toBeFalsy();
    });

    it('should have email invalid if email is not valid', () => {
        form.get('email')?.setValue('invalid email');

        expect(form.get('email')?.valid).toBeFalsy();
    });

    it('should have email valid if email is valid', () => {
        form.get('email')?.setValue('valid@email.com');

        expect(form.get('email')?.valid).toBeTruthy();
    });

    it('should have a valid form', () => {
        form.get('email')?.setValue('valid@email.com');
        form.get('password')?.setValue('anyPassword');

        expect(form.valid).toBeTruthy();
    });

});