import { Component, OnInit } from '@angular/core';
import { UserAuthenticatedStore } from '@seguridad/app/stores';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private userAuthenticated: UserAuthenticatedStore) {}

  public ngOnInit(): void {
    this.userAuthenticated.dispatch({
      token: 'ccccc',
      name: 'ccccc',
      authorities: [],
    });
  }
}
