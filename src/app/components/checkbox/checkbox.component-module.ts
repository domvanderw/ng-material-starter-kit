import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [MatCheckboxModule, CommonModule],
  declarations: [CheckboxComponent],
  providers: [],
  exports: [CheckboxComponent]
})
export class CheckboxComponentModule {
}
