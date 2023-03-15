import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { APP_INFO } from 'src/app/app.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private _app = APP_INFO;

  private _location = this._app.company;

  get location(): string {
    return this._location;
  }

  get app() {
    return this._app;
  }
}
