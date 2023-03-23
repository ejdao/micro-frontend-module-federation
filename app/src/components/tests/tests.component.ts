import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  selector: 'seg-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestsComponent {}
