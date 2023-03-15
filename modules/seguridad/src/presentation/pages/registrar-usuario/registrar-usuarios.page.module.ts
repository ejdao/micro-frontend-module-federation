import { NgModule } from '@angular/core';
import { RegistrarUsuariosPageRouting } from './registrar-usuarios.page.routing';
import { RegistrarUsuariosPage } from './registrar-usuarios.page';

@NgModule({
  declarations: [RegistrarUsuariosPage],
  imports: [RegistrarUsuariosPageRouting],
})
export class RegistrarUsuariosPageModule {}
