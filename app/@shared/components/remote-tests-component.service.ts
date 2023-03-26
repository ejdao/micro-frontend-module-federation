import {
  ApplicationRef,
  ChangeDetectorRef,
  ComponentRef,
  Inject,
  Injectable,
  ViewChild,
  EventEmitter,
  ViewContainerRef,
} from '@angular/core';

export interface TestsComponentProperties {
  label: string;
  emitEvent: EventEmitter<string>;
}

@Injectable({ providedIn: 'root' })
export class RemoteTestsComponentService {
  public async getTests1Component(viewContainer: ViewContainerRef) {
    const m = await import('seguridad/TestsComponentModule');

    m.TestsComponentModule.ɵmod.exports[0];

    const ref: ComponentRef<TestsComponentProperties> = viewContainer.createComponent(
      m.TestsComponentModule.ɵmod.exports[0]
    );

    return ref;
  }

  /* public async getTests1Component(label = 'default label') {
    const m = await import('seguridad/TestsComponentModule');
    return m.TestsComponentModule.ɵmod.exports[0];
  } */

  public async getTests2Component(label = 'default label') {
    const m = await import('seguridad/TestsComponentModule');
    return m.TestsComponentModule.ɵmod.exports[1];
  }

  public async getStandAloneTestsComponent(label = 'default label') {
    const m = await import('seguridad/TestsStandAloneComponent');
    return m.TestsStandAloneComponent;
  }
}
