import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemesComponent } from './memes/memes.component';
import { ReceptenComponent } from './recepten/recepten.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { FotochallengesComponent } from './fotochallenges/fotochallenges.component';
import { WandelingenComponent } from './wandelingen/wandelingen.component';
import { MaterialModule } from './material/material.module';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
