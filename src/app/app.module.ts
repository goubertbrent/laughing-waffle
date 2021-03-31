import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemesComponent } from './memes/memes.component';
import { ReceptenComponent } from './recepten/recepten.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { FotochallengesComponent } from './fotochallenges/fotochallenges.component';
import { WandelingenComponent } from './wandelingen/wandelingen.component';

@NgModule({
  declarations: [
    AppComponent,
    MemesComponent,
    ReceptenComponent,
    ChallengesComponent,
    FotochallengesComponent,
    WandelingenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
