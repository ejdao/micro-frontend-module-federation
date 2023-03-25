import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRouting } from './home.routing';
import { HomePage } from './home.page';
import { RemoteTestsComponent } from '@shared/components/TestsComponent';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomePageRouting],
  providers: [RemoteTestsComponent],
})
export class HomePageModule {}
