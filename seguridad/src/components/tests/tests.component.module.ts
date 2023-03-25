import { NgModule } from '@angular/core';
import { Tests1Component } from './test-1/tests.component';
import { Tests2Component } from './test-2/tests.component';

@NgModule({
  declarations: [Tests1Component, Tests2Component],
  exports: [Tests1Component, Tests2Component],
})
export class TestsComponentModule {}
