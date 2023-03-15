import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'seg-registrar-usuarios',
  templateUrl: './registrar-usuarios.page.html',
  styleUrls: ['./registrar-usuarios.page.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrarUsuariosPage implements OnInit {
  public ngOnInit(): void {
    console.log(localStorage.getItem('jar-tok-auth'));
  }
}
