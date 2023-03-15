import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { JarLayoutModule } from '@jasr-devs/ng-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [CommonModule, JarLayoutModule, RouterModule],
})
export class AdminLayoutModule {}
