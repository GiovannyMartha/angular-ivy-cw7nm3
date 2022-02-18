import { NgxChessBoardModule } from 'ngx-chess-board';
import { SchaakComponent } from './schaak.component';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [NgxChessBoardModule.forRoot()],
  declarations: [SchaakComponent],
  bootstrap: [SchaakComponent],
})
export class SchaakModule {}
