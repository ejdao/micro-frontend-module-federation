import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ROOT_REDUCERS } from './app.state';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, StoreModule.forRoot(ROOT_REDUCERS), AppRouting],
  bootstrap: [AppComponent],
})
export class AppModule {}
