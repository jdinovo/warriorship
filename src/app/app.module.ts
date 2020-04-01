import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import {HomepageComponent} from './homepage/homepage.component';
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
import {TwitterComponent} from './social/twitter/twitter.component';
import { FacebookComponent } from './social/facebook/facebook.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    QuestionCardComponent,
    HomepageComponent,
    ResultsComponent,
    NotFoundComponent,
    CreditsComponent,
    AboutComponent,
    TwitterComponent,
    TwitterComponent,
    FacebookComponent,
    FacebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSidenavModule,
    MatExpansionModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
