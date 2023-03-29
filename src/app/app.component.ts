import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista-Lavera';
  isLoading = true;
  alumnos: string[] = ['Juan', 'Jorge', 'Pedro', 'Espero más adelante cargar esto desde una API']
}
