import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRouting } from './home.routing';
import { HomePage } from './home.page';
import { loadRemoteModule } from '@angular-architects/module-federation';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4001/seguridad.js',
      exposedModule: './TestsComponentModule',
    }).then(m => m.TestsComponentModule),
    HomePageRouting,
  ],
})
export class HomePageModule {
  constructor() {}
}
