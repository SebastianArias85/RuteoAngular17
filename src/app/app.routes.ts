import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaOneComponent } from './pagina-one/pagina-one.component';
import { PaginaTwoComponent } from './pagina-two/pagina-two.component';

export const routes: Routes = [
    {
        path:'',
        component: PaginaPrincipalComponent,
    },
    {
        path:'paginaprincipal',
        component: PaginaPrincipalComponent,
    },
    {
        path:'paginaone',
        component: PaginaOneComponent,
    },
    {
        path:'paginatwo',
        component: PaginaTwoComponent,
    },
];
