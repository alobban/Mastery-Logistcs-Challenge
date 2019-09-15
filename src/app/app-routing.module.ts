import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadBoardComponent } from './load-board/load-board.component';


const routes: Routes = [
  { path: '', redirectTo: 'load-board', pathMatch: 'full' },
  { path: 'load-board', component: LoadBoardComponent },
  { path: '**', redirectTo: 'load-board', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
