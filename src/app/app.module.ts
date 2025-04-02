import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoteListComponent } from './components/note-list/note-list.component'; // Asegúrate de esta línea

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent, // Aquí debe estar incluido
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
