import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'seg-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestsComponent {
  @Input() label = 'default label';
}
