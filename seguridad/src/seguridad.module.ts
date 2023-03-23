import { NgModule } from '@angular/core';
import { SeguridadRouting } from './seguridad.routing';
import { UserAuthenticatedImpl, UserAuthenticatedStore } from './stores';

@NgModule({
  imports: [SeguridadRouting],
  providers: [{ provide: UserAuthenticatedStore, useClass: UserAuthenticatedImpl }],
})
export class SeguridadModule {}
