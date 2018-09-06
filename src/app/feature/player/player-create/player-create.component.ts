import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../../model/player';
import { PlayerService } from '../../../service/player.service';

import { Team } from '../../../model/team';
import { TeamService } from '../../../service/team.service';

import { Owner } from '../../../model/owner';
import { OwnerService } from '../../../service/owner.service';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  title: string = "Add Player";
  resp: any;
  player: Player = new Player();
  teams: Team[];
  owner: Owner;
  owners: Owner[];

  constructor(private playerSvc: PlayerService,
              private router: Router,
              private teamSvc: TeamService,
              private ownerSvc: OwnerService) { }

  ngOnInit() {
    this.teamSvc.list().subscribe(tms => {
      this.teams = tms;
    });
    this.ownerSvc.list().subscribe(owns => {
      this.owners = owns;
    });
  }
  
  create () {
    console.log('add a player...');
    console.log(this.player);
    this.playerSvc.create(this.player)
      .subscribe(resp => {
        this.resp = resp;
        console.log("Player-Create:", this.resp);
        this.router.navigate(['/player/list']);
    });
  }

}
