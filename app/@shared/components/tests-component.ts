import {
  AfterViewInit,
  Component,
  ComponentRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserAuthenticatedStore } from '@app/stores';
import { RemoteTestsComponentService, TestsComponentProperties } from '@shared/components';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'seg-tests',
  template: `<p class="abc">asdadsdas</p>
    <div #testComponent></div> `,
  styles: [``],
})
export class TestsComponent implements AfterViewInit, OnDestroy {
  @Input() label = '';
  @Output() emitEvent = new EventEmitter<string>();

  @ViewChild('testComponent', { read: ViewContainerRef }) viewContainer!: ViewContainerRef;
  private _testsComponent!: ComponentRef<TestsComponentProperties>;

  private _eventSubscription!: Subscription;
  //private _formControlSubscription!: Subscription;

  constructor(private _testsComponentModule: RemoteTestsComponentService) {}

  public async ngAfterViewInit(): Promise<void> {
    await this._loadComponent();

    this._eventSubscription = this._testsComponent.instance.emitEvent.subscribe(_ => {
      this.emitEvent.emit(_);
    });
  }

  private async _loadComponent(): Promise<void> {
    this._testsComponent = await this._testsComponentModule.getTests1Component(this.viewContainer);

    this._testsComponent.instance.label = this.label;
  }

  public ngOnDestroy(): void {
    this._eventSubscription.unsubscribe();
    //this._formControlSubscription.unsubscribe();
  }
}
