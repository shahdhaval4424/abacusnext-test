import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TabsPage, TimerPage, DetailPage} from './pages'


const routes: Routes = [
  { path: '', redirectTo: 'timer-page', pathMatch: 'full' },
  { path: 'tabs', component: TabsPage },
  { path: 'timer-page', component: TimerPage},
  { path: 'detail-page', component:DetailPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
