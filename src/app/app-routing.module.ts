import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengesComponent } from './challenges/challenges.component';
import { FotochallengesComponent } from './fotochallenges/fotochallenges.component';
import { MemesComponent } from './memes/memes.component';
import { ReceptenComponent } from './recepten/recepten.component';
import { WandelingenComponent } from './wandelingen/wandelingen.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {path: 'memes', component:MemesComponent},
  {path: 'challenges', component:ChallengesComponent},
  {path: 'fotochallenges', component:FotochallengesComponent},
  {path: 'recepten', component:ReceptenComponent},
  {path: 'wandelingen', component:WandelingenComponent},
  {path:'', redirectTo:'/challenges', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
