# MicroFrontendMf

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Implementación de microfrontend con Module Federation

Puede seguir este [link](https://www.youtube.com/watch?v=PnzI3GGozLA&ab_channel=weincode) para ver el tutorial que se siguió para este proyecto.

Usar `ng add @angular-architects/module-federation --project nameproject --port 9999` para generar archivos `webpack.config.js` y `webpack.prod.config.js` en el proyecto seleccionado.

## El patrón redux con NgRx en angular

Sigue este [link](https://academia-binaria.com/el-patron-redux-con-ngrx-en-angular/) para ver la información con la cual se implementó NgRx en este proyecto.

Sigue este otro [link](https://www.youtube.com/watch?v=6X3nWNXzDc0&list=PL_WGMLcL4jzVkzMox4UxGcsBLvFurCDax&index=1&ab_channel=LeiferMendez) para ver una lista de videos complementarios acerca de NgRx.

`ng g @ngrx/schematics:feature stores/user-authenticated --project=app --module=app.module.ts --no-flat --skip-tests=true` Ejemplo de como generar stores mediante @ngrx/schematics.

Mas información acerca de componentes compartidos y production mode [aquí](https://www.bitovi.com/blog/how-to-build-a-micro-frontend-architecture-with-angular).

## Observaciones

No puedes exportar un modulo si no está siendo usado en el proyecto el cual exporta debido a que si no se usa no se compila.

[Aquí](https://github.com/ydmitry/angular11-webpack-module-federation-custom-webpack-builder/blob/main/src/app/app.component.ts#L21) puede ver una forma de importar componentes en componentes.
