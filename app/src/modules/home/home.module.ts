import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRouting } from './home.routing';
import { TestsComponentModule } from 'seguridad/TestsModule';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, TestsComponentModule, HomePageRouting],
})
export class HomePageModule {}
