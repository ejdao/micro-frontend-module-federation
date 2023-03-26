import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessControlComponent } from './access-control.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AccessControlComponent],
  imports: [CommonModule, RouterModule],
})
export class AccessControlModule {}
