import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRouting } from './home.routing';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomePageRouting],
})
export class HomePageModule {}
