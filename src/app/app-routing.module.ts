import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

import { OwnerListComponent } from './feature/owner/owner-list/owner-list.component';
import { OwnerDetailComponent } from './feature/owner/owner-detail/owner-detail.component';
import { OwnerEditComponent } from './feature/owner/owner-edit/owner-edit.component';

import { TeamListComponent } from './feature/team/team-list/team-list.component';
import { TeamDetailComponent } from './feature/team/team-detail/team-detail.component';
import { TeamEditComponent } from './feature/team/team-edit/team-edit.component';

import { PlayerListComponent } from './feature/player/player-list/player-list.component';
import { PlayerDetailComponent } from './feature/player/player-detail/player-detail.component';
import { PlayerEditComponent } from './feature/player/player-edit/player-edit.component';
import { PlayerCreateComponent } from './feature/player/player-create/player-create.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  
  {path:'owner/list', component: OwnerListComponent},
  {path:'owner/detail/:id', component: OwnerDetailComponent},
  {path:'owner/edit/:id', component: OwnerEditComponent},
  
  {path:'team/list', component: TeamListComponent},
  {path:'team/detail/:id', component: TeamDetailComponent},
  {path:'team/edit/:id', component: TeamEditComponent},
  
  {path:'player/list', component: PlayerListComponent},
  {path:'player/detail/:id', component: PlayerDetailComponent},
  {path:'player/edit/:id', component: PlayerEditComponent},
  {path:'player/create', component: PlayerCreateComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
