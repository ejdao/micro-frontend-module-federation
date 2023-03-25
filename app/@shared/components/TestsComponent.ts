import { Injectable } from '@angular/core';

@Injectable()
export class RemoteTestsComponent {
  public async getTests1Component(label = 'default label') {
    const m = await import('seguridad/TestsComponentModule');
    return m.TestsComponentModule.ɵmod.exports[0];
  }

  public async getTests2Component(label = 'default label') {
    const m = await import('seguridad/TestsComponentModule');
    return m.TestsComponentModule.ɵmod.exports[1];
  }

  public async getStandAloneTestsComponent(label = 'default label') {
    const m = await import('seguridad/TestsStandAloneComponent');
    return m.TestsStandAloneComponent;
  }
}
