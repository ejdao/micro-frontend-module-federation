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
  public value = new FormControl('');

  constructor() {}
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

  public async ngAfterViewInit(): Promise<void> {}

  public resetInput(_ = '') {
    this.value.setValue(_);
  }

  /*public cambiarEstado(): void {
    this._userAuthenticated.dispatch({
      token: 'aaaaa',
      name: 'aaaaa',
      authorities: [],
    });
  }*/

  public ngOnInit(): void {
    /*const obs = this._userAuthenticated.observable().subscribe(_ => {
      console.log(_);
    });
    obs.unsubscribe();

    document.title = 'Module Federation | Home';*/
  }
}
