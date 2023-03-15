import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessControlModule } from './access-control/access-control.module';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, AdminLayoutModule, AccessControlModule, AppRouting],
  bootstrap: [AppComponent],
})
export class AppModule {}
