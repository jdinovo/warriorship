import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import {HomepageComponent} from './homepage/homepage.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { ResultsComponent } from './results/results.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreditsComponent } from './credits/credits.component';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AboutComponent } from './about/about.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    QuestionCardComponent,
    HomepageComponent,
    ResultsComponent,
    NotFoundComponent,
    CreditsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'quiz', component: QuestionCardComponent},
      {path: 'results', component: ResultsComponent},
      {path: 'credits', component: CreditsComponent},
      {path: 'about', component: AboutComponent},
      {path: '**', component: NotFoundComponent}
    ]),
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSidenavModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
