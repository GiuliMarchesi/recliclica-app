import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginPageform{
    //Creo una variable privada formBuilder de tipo FormBuilder
    private formBuilder: FormBuilder;
    //Creo un contructor que recibe un formBuilder
    constructor(formBuilder: FormBuilder){
        //Le asigno el valor del formBuilder al formBuilder de la clase
        this.formBuilder = formBuilder;
    }

    createForm() : FormGroup{
        return this.formBuilder.group({
            //indico que el campo email va a tener una lista de validaciones y que son requeridas
            email: ['', [Validators.email, Validators.required]],
            password: ['', [Validators.required]]
        });
    }
}