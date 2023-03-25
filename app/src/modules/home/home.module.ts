import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRouting } from './home.routing';
import { HomePage } from './home.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RemoteTestsComponentService, TestsComponent } from '@shared/components';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, FormsModule, TestsComponent, ReactiveFormsModule, HomePageRouting],
})
export class HomePageModule {}
