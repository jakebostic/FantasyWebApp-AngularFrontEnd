import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PlayerService } from '../../../service/player.service';
import { Player } from '../../../model/player';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  title: string = "Player Detail";
  player: Player;

  constructor(private playerSvc: PlayerService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getPlayerById(id);
    });
  }
  
  getPlayerById(id) {
    this.playerSvc.get(id)
      .subscribe(players => {
        this.player = players.length > 0 ?
        players[0] : null;
        console.log("Player:", this.player);
    });
  }
  
  remove(): void {
    this.playerSvc.remove(this.player.Id)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/player/list");
  });
  }

}
