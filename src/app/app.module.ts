import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxChessBoardModule } from 'ngx-chess-board';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { SchaakModule } from './schaak/schaak.module';
import { HomeComponent } from './home/home.component';
@NgModule({
  imports: [BrowserModule, FormsModule, NgxChessBoardModule, AppRoutingModule, SchaakModule],
  declarations: [AppComponent, HelloComponent, MenuComponent, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
