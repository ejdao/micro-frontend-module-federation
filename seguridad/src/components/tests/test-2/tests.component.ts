import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'seg-tests-2',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tests2Component {
  @Input() label = 'default label';
}
