import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


// Composants
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ListBookComponent } from './list-book/list-book.component';

//services
import { BookService } from './services/book.service';
import { MenuComponent } from './menu/menu.component';
import { DetailBookComponent } from './detail-book/detail-book.component';

// table de routage
const appRoutes: Routes = [
  { path: 'books', component: ListBookComponent },
  { path: 'books/:id', component: DetailBookComponent },
  { path: '', component: ListBookComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ListBookComponent,
    MenuComponent,
    DetailBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
