import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  selector: 'seg-tests-stand-alone',
  template: `
    <p>soy un componente stand-alone</p>

    <div>{{ label }}</div>
  `,
  styles: [``],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestsStandAloneComponent {
  @Input() label = 'default label';
}
