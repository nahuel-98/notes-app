import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Note {
  id: string;
  title: string;
  content: string;
  // category: string;
  cat: string;
}

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css'],
})
export class NoteCardComponent {
  @Input() note!: Note;
  @Output() edit = new EventEmitter<Note>();
  @Output() delete = new EventEmitter<string>();

  onEdit() {
    this.edit.emit(this.note);
  }

  onDelete() {
    this.delete.emit(this.note.id);
  }
}
