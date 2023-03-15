import { JarLaySnavItems } from '@jasr-devs/ng-layout';

export const SIDE_NAV: JarLaySnavItems[] = [
  {
    type: 'link',
    name: 'Home',
    url: 'home',
  },
  {
    type: 'dropdown',
    name: 'Seguridad',
    url: 'seguridad',
    dropdownLinks: [
      {
        name: 'Registrar Usuarios',
        url: 'registrar-usuarios',
      },
    ],
  },
];
