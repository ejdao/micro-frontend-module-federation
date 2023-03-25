import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRouting } from './home.routing';
import { HomePage } from './home.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RemoteTestsComponentService } from '@shared/components';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HomePageRouting],
})
export class HomePageModule {}
