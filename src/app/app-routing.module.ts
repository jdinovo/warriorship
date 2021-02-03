import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ResultsComponent} from './results/results.component';
import {CreditsComponent} from './credits/credits.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {QuestionCardComponent} from './question-card/question-card.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'quiz', component: QuestionCardComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'credits', component: CreditsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
