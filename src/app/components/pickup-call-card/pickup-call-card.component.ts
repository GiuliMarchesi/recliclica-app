import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class PickupCallCardComponent  implements OnInit {

  @Input() hasHeader: boolean = false;
  @Input() hasFooter: boolean = false;
  @Input() status: String = '';
  @Input() updatedAt: String = '';
  @Input() createdAt: String = '';
  @Input() notes: String = '';
  @Input() value: String = '';  
  

  constructor() { }

  ngOnInit() {}

}
