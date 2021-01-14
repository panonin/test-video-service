import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FilmsComponent } from './films/films.component';
import { ChannelsComponent } from './channels/channels.component';
import { LoginModalComponent } from './layout/header/login-modal/login-modal.component';
import { NewsListComponent } from './films/news-list/news-list.component';
import { GenresListComponent } from './films/genres-list/genres-list.component';
import { FilmItemComponent } from './films/film-item/film-item.component';
import { ChannelItemComponent } from './channels/channel-item/channel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    FilmsComponent,
    ChannelsComponent,
    LoginModalComponent,
    NewsListComponent,
    GenresListComponent,
    FilmItemComponent,
    ChannelItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
