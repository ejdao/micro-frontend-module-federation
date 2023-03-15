import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessControlComponent } from './access-control/access-control.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthGuard, GuestGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AdminLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomePageModule),
        data: { title: 'Home', breadcrumb: 'Home' },
      },
    ],
  },
  {
    path: '',
    canActivate: [GuestGuard],
    component: AccessControlComponent,
    children: [
      {
        path: 'access-control',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
