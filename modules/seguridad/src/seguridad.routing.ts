import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'registrar-usuarios',
    loadChildren: () =>
      import('./presentation/pages/registrar-usuario/registrar-usuarios.page.module').then(
        m => m.RegistrarUsuariosPageModule
      ),
    data: { title: 'Registrar usuarios', breadcrumb: 'Registrar usuarios' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadRouting {}
