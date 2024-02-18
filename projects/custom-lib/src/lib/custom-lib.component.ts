import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CustomLibService } from './custom-lib.service';
@Component({
  selector: 'app-customizable-component',
  templateUrl: './custom-lib.component.html',
  styleUrls: ['./custom-lib.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class CustomizableComponent implements OnInit {
  @Input() backgroundColor: string = 'transparent';
  @Input() textColor: string = 'black';
  @Input() padding: string = '10px';
  @Input() borderRadius: string = '0';
  @Input() customClass: string = ''; 
  @Output() componentClicked = new EventEmitter<void>();
 
  welcomeMessage: string;
  get appliedClass(): string {
    return this.customClass || 'default-custom-class'; 
  }
  constructor(private customLibService: CustomLibService) {
    this.welcomeMessage = this.customLibService.getWelcomeMessage();
  }


  ngOnInit(): void {
    
  }

  onClick(): void {
    this.componentClicked.emit(); // Emit the click event
  }
}
