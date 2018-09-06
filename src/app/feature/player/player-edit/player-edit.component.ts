import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../../service/player.service';
import { Player } from '../../../model/player';
import { Owner } from '../../../model/owner';
import { OwnerService } from '../../../service/owner.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {
  title: string = "Update Player";
  id: string;
  resp: any;
  player: Player;
  owner: Owner;
  owners: Owner[];

  constructor(private playerSvc: PlayerService,
              private router: Router,
              private route: ActivatedRoute,
              private ownerSvc: OwnerService) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms["id"]);
    this.playerSvc.get(this.id)
      .subscribe(players => {
      this.player = players.length > 0 ?
      players[0] : null;
      console.log(this.player);
    });
    this.ownerSvc.list().subscribe(owns => {
      this.owners = owns;
    });
    
  }
  
  change () {
    console.log(this.player);
    this.playerSvc.change(this.player)
      .subscribe(resp => {
      this.resp = resp;
      console.log("Player-Change:", this.resp);
      this.router.navigate(['/player/detail/'+this.id]);
    });
  }

}
