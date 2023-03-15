import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthUserService } from '@app/auth/application/services';
import { AuthUserImpl } from '@app/auth/infrastructure/services';
import { MatButtonModule } from '@eklipse/components/material';
import { GcmFieldsModule } from '@eklipse/components/fields';
import { LoginPageRouting } from './login.page.routing';
import { AuthUserController } from '../../controllers';
import { LoginPage } from './login.page';

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, GcmFieldsModule, MatButtonModule, LoginPageRouting],
  providers: [AuthUserController, { provide: AuthUserService, useClass: AuthUserImpl }],
})
export class LoginPageModule {}
