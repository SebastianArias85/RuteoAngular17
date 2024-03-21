import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaOneComponent } from './pagina-one/pagina-one.component';
import { PaginaTwoComponent } from './pagina-two/pagina-two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent,PaginaPrincipalComponent,PaginaOneComponent,PaginaTwoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ruteoAngular17';
}
