import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@eklipse/components/material';
import { AdminLayoutComponent } from './admin-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JarLayoutModule } from '@jasr-devs/ng-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminLayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    JarLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
  ],
})
export class AdminLayoutModule {}
