import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScorepageComponent } from './components/scorepage/scorepage.component';
import { StartgameComponent } from './components/startgame/startgame.component';

import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome' , component: WelcomePageComponent },
  { path: 'quiz', component: StartgameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
