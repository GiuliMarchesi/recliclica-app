import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],

  //reutilizar y no tener que importar el modulo en cada pagina
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class ErrorMessageComponent  implements OnInit {

  @Input() message: string = '';
  @Input() field: any;
  @Input() error: string = '';

  constructor() { }

  ngOnInit() {}

  shouldShowComponent(){
    // form.get('email')?.touched && form.get('email')?.errors?.['requiered']
    if(this.field?.touched && this.field.errors?.[this.error]){
      return true;
    }
    return false;
  }

}
