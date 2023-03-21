import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatSnackBarModule } from '@eklipse/components/material';
import { AccessControlModule } from './access-control/access-control.module';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { AddTokenInterceptor } from './interceptors';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
/* NgRx */
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserAuthenticatedImpl, UserAuthenticatedStore } from './stores';
import { ROOT_REDUCERS } from './app.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    /* Angular */
    HttpClientModule,
    BrowserAnimationsModule,
    /* Component's modules */
    AccessControlModule,
    AdminLayoutModule,
    /* Material */
    MatSnackBarModule,
    MatDialogModule,
    /* Routing */
    AppRouting,
    /* NgRx */
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([]),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
    { provide: UserAuthenticatedStore, useClass: UserAuthenticatedImpl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
