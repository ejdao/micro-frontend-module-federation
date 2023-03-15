import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessControlModule } from './access-control/access-control.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { MatDialogModule, MatSnackBarModule } from '@eklipse/components/material';
import { AddTokenInterceptor } from './interceptors';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AdminLayoutModule,
    AccessControlModule,
    MatSnackBarModule,
    MatDialogModule,
    AppRouting,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
