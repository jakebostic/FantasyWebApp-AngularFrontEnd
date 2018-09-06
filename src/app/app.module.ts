import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { MenuComponent } from './core/menu/menu.component';
import { LoginComponent } from './core/login/login.component';
import { AboutComponent } from './core/about/about.component';
import { OwnerCreateComponent } from './feature/owner/owner-create/owner-create.component';
import { OwnerDetailComponent } from './feature/owner/owner-detail/owner-detail.component';
import { OwnerEditComponent } from './feature/owner/owner-edit/owner-edit.component';
import { OwnerListComponent } from './feature/owner/owner-list/owner-list.component';
import { OwnerService } from './service/owner.service';
import { PlayerCreateComponent } from './feature/player/player-create/player-create.component';
import { PlayerDetailComponent } from './feature/player/player-detail/player-detail.component';
import { PlayerEditComponent } from './feature/player/player-edit/player-edit.component';
import { PlayerListComponent } from './feature/player/player-list/player-list.component';
import { PlayerService } from './service/player.service';
import { TeamCreateComponent } from './feature/team/team-create/team-create.component';
import { TeamDetailComponent } from './feature/team/team-detail/team-detail.component';
import { TeamEditComponent } from './feature/team/team-edit/team-edit.component';
import { TeamListComponent } from './feature/team/team-list/team-list.component';
import { TeamService } from './service/team.service';
import { SortPipe } from './pipe/sort.pipe';
import { RankPipe } from './pipe/rank.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    AboutComponent,
    OwnerCreateComponent,
    OwnerDetailComponent,
    OwnerEditComponent,
    OwnerListComponent,
    PlayerCreateComponent,
    PlayerDetailComponent,
    PlayerEditComponent,
    PlayerListComponent,
    TeamCreateComponent,
    TeamDetailComponent,
    TeamEditComponent,
    TeamListComponent,
    SortPipe,
    RankPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    OwnerService,
    TeamService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
