import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { APP_INFO } from '../app.config';

@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessControlComponent {
  private _app = APP_INFO;

  constructor(private _title: Title) {}

  public ngOnInit(): void {
    this._title.setTitle('Module Federation | Control de acceso');
    document.getElementById('body')?.classList.add('access-control');
  }

  public ngOnDestroy(): void {
    document.getElementById('body')?.classList.remove('access-control');
  }

  get app() {
    return this._app;
  }
}
