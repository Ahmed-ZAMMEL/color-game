import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { CaseComponent } from './case/case.component';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  declarations: [NewComponent, CaseComponent]
})
export class GameModule { }
