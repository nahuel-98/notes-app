import { Component } from '@angular/core';
import { NoteListComponent } from './components/note-list/note-list.component'; // Importar el componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NoteListComponent], // Agregarlo aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'serverless-notes';
}
