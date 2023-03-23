import { NgModule } from '@angular/core';
import { UserAuthenticatedImpl } from 'app/stores';
import { SeguridadRouting } from './seguridad.routing';
import { UserAuthenticatedStore } from './stores';

@NgModule({
  imports: [SeguridadRouting],
  providers: [{ provide: UserAuthenticatedStore, useClass: UserAuthenticatedImpl }],
})
export class SeguridadModule {}
