import { NgModule } from '@angular/core';
//import { UserAuthenticatedStore } from './stores';
//import { UserAuthenticatedImpl } from '@app/stores';
import { SeguridadRouting } from './seguridad.routing';

@NgModule({
  imports: [SeguridadRouting],
  //providers: [{ provide: UserAuthenticatedStore, useClass: UserAuthenticatedImpl }],
})
export class SeguridadModule {}
