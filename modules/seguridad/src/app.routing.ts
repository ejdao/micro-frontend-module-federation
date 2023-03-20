import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'registrar-usuarios', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./seguridad.module').then(m => m.SeguridadModule),
    data: { title: 'Seguridad', breadcrumb: 'Seguridad' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
