// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-note-modal',
//   templateUrl: './note-modal.component.html',
//   styleUrls: ['./note-modal.component.css'],
// })
// export class NoteModalComponent {
//   @Input() note: any; // Recibe la nota seleccionada
//   @Output() close = new EventEmitter<void>(); // Evento para cerrar el modal

//   closeModal() {
//     this.close.emit();
//   }
// }

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.css'],
})
export class NoteModalComponent {
  @Input() note: any; // Recibe la nota seleccionada
  @Output() close = new EventEmitter<void>(); // Evento para cerrar el modal

  closeModal() {
    this.close.emit();
  }
}
