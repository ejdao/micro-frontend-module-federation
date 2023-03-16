import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatSnackBarModule } from '@eklipse/components/material';
import { AccessControlModule } from './access-control/access-control.module';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { environment } from 'src/environments/environment';
import { AddTokenInterceptor } from './interceptors';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
/* NgRx */
import * as fromUserAuthenticated from './stores/user-authenticated/user-authenticated.reducer';
import { UserAuthenticatedEffects } from './stores/user-authenticated';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

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
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    StoreModule.forFeature(
      fromUserAuthenticated.userAuthenticatedFeatureKey,
      fromUserAuthenticated.reducer
    ),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([UserAuthenticatedEffects]),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
