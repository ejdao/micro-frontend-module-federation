import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginPayload } from '@app/auth/application/data-transfers';

export class LoginForm extends FormGroup {
  constructor() {
    super({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  get email(): FormControl {
    return this.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.get('password') as FormControl;
  }

  public get model(): LoginPayload {
    return {
      email: this.email.value,
      password: this.password.value,
    };
  }
}
