# Forma de ruteo con Angular17
Forma de reteo con Angular 17

## Paso 1
En vez de utilizar el href en el .html para redireccionar colocar lo siguiente:<br/>
[routerLink]="[ '/vuelos']"

## Paso 2
En el .ts de ese componente importar:<br/>
import { RouterModule } from '@angular/router';

## Paso 3
En el app.component.html agregar: <br/>
< router-outlet ></ router-outlet >

## Paso 4
En el app.routes.ts agregar las rutas: <br/>
export const routes: Routes = [<br/>
    {<br/>
        path:'vuelos',<br/>
        component: VuelosComponent,<br/>
    },<br/>
];
