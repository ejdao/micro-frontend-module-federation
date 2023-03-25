import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { UserAuthenticatedStore } from '@app/stores';
import {
  getTestsComponent,
  TestsComponentProperties,
} from '@shared/components/tests-component.functions';
//import { RemoteTestsComponent } from '@shared/components/TestsComponent';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None,
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit, OnDestroy {
  @ViewChild('testComponent', { read: ViewContainerRef }) viewContainer!: ViewContainerRef;

  private _obs!: Subscription;

  constructor(
    private _userAuthenticated: UserAuthenticatedStore,
    //private _testsComponentModule: RemoteTestsComponent,
    private _cd: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this._obs = this._userAuthenticated.observable().subscribe(_ => {
      console.log(_);
    });

    document.title = 'Module Federation | Home';

    this.cargarTestComponent();
  }

  public async cargarTestComponent(): Promise<void> {
    const Tests1Component = await getTestsComponent();

    const ref: ComponentRef<TestsComponentProperties> =
      this.viewContainer.createComponent(Tests1Component);

    ref.instance.label = 'label cambiado desde el host';

    this._cd.markForCheck();
  }

  public cambiarEstado(): void {
    this._userAuthenticated.dispatch({
      token: 'aaaaa',
      name: 'aaaaa',
      authorities: [],
    });
  }

  public ngOnDestroy(): void {
    this._obs.unsubscribe();
  }
}
