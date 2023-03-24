import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { UserAuthenticatedImpl, UserAuthenticatedStore } from './stores';
import { AppComponent } from './app.component';
import { ROOT_REDUCERS } from './app.state';
import { AppRouting } from './app.routing';
import { TestsComponentModule } from './components/tests/tests.component.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    TestsComponentModule,
    AppRouting,
  ],
  providers: [{ provide: UserAuthenticatedStore, useClass: UserAuthenticatedImpl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
