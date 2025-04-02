// import { Component } from '@angular/core';

// interface Note {
//   id: string;
//   title: string;
//   content: string;
//   category: string;
// }

// @Component({
//   selector: 'app-note-list',
//   templateUrl: './note-list.component.html',
//   styleUrls: ['./note-list.component.css'],
// })
// export class NoteListComponent {
//   notes: Note[] = [
//     {
//       id: '1',
//       title: 'Compra',
//       content: 'Comprar leche y pan',
//       category: 'Tareas',
//     },
//     {
//       id: '2',
//       title: 'Ideas',
//       content: 'Pensar en una nueva idea de app',
//       category: 'Creatividad',
//     },
//     {
//       id: '3',
//       title: 'Reunión',
//       content: 'Revisar los puntos clave para la reunión',
//       category: 'Trabajo',
//     },
//   ];

//   onEditNote(note: Note) {
//     console.log('Editar nota:', note);
//   }

//   onDeleteNote(noteId: string) {
//     this.notes = this.notes.filter((note) => note.id !== noteId);
//     console.log('Nota eliminada:', noteId);
//   }
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common'; // Importar CommonModule

// @Component({
//   selector: 'app-note-list',
//   standalone: true,
//   imports: [CommonModule], // Agregar CommonModule aquí
//   templateUrl: './note-list.component.html',
//   styleUrls: ['./note-list.component.css'],
// })
// export class NoteListComponent {
//   notes = [
//     {
//       id: '1',
//       title: 'Compra',
//       content: 'Comprar leche y pan',
//       category: 'Tareas',
//     },
//     {
//       id: '2',
//       title: 'Ideas',
//       content: 'Pensar en una nueva idea de app',
//       category: 'Creatividad',
//     },
//     {
//       id: '3',
//       title: 'Reunión',
//       content: 'Revisar los puntos clave para la reunión',
//       category: 'Trabajo',
//     },
//   ];
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteModalComponent } from '../note-modal/note-modal.component'; // Importar el modal

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, NoteModalComponent], // Agregar aquí el modal
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent {
  notes = [
    { title: 'Compra', content: 'Comprar leche y pan', cat: 'Tareas' },
    {
      title: 'Ideas',
      content: 'Pensar en una nueva idea de app',
      cat: 'Creatividad',
    },
    {
      title: 'Reunión',
      content: 'Revisar los puntos clave para la reunión',
      cat: 'Trabajo',
    },
  ];

  selectedNote: any = null;

  openModal(note: any) {
    this.selectedNote = note;
  }

  closeModal() {
    this.selectedNote = null;
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }
}
