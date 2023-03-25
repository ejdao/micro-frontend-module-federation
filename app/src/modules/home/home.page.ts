import {
  AfterViewInit,
  Component,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserAuthenticatedStore } from '@app/stores';
import { RemoteTestsComponentService, TestsComponentProperties } from '@shared/components';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None,
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('testComponent', { read: ViewContainerRef }) viewContainer!: ViewContainerRef;
  private _testsComponent!: ComponentRef<TestsComponentProperties>;

  public value = new FormControl('');
  private _eventSubscription!: Subscription;
  private _formControlSubscription!: Subscription;

  constructor(
    private _userAuthenticated: UserAuthenticatedStore,
    private _testsComponentModule: RemoteTestsComponentService
  ) {
    this._formControlSubscription = this.value.valueChanges.subscribe(_ => {
      this._testsComponent.instance.label = _ || '';
    });
  }

  public async ngAfterViewInit(): Promise<void> {
    await this._loadComponent();

    this._testsComponent.instance.emitEvent.subscribe(_ => {
      this.value.setValue(_);
    });
  }

  private async _loadComponent(): Promise<void> {
    this._testsComponent = await this._testsComponentModule.getTests1Component(this.viewContainer);
  }

  public cambiarEstado(): void {
    this._userAuthenticated.dispatch({
      token: 'aaaaa',
      name: 'aaaaa',
      authorities: [],
    });
  }

  public ngOnDestroy(): void {
    this._eventSubscription.unsubscribe();
    this._formControlSubscription.unsubscribe();
  }

  public ngOnInit(): void {
    /*const obs = this._userAuthenticated.observable().subscribe(_ => {
      console.log(_);
    });
    obs.unsubscribe();

    document.title = 'Module Federation | Home';*/
  }
}
