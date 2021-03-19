import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'user/',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'game/',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
