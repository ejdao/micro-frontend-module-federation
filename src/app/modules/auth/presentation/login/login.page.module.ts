import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageRouting } from './login.page.routing';
import { LoginPage } from './login.page';

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, LoginPageRouting],
})
export class LoginPageModule {}
