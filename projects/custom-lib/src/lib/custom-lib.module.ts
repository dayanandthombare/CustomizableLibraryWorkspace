import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomizableComponent } from './custom-lib.component';

@NgModule({
  declarations: [
    CustomizableComponent // Declares the component
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule // Import CommonModule here
  ],
  exports: [
    CustomizableComponent // Export your component
  ]
})
export class CustomizableLibModule {}
