import { Component, OnInit } from '@angular/core';
import { Player } from '../../../model/player';
import { PlayerService } from '../../../service/player.service';
import { SortPipe } from '../../../pipe/sort.pipe';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];
  title: string = "Active Fantasy Players";
  sortBy: string = "Id";
  
  constructor(private playerSvc: PlayerService) { }

  ngOnInit() {
    
    this.playerSvc.list().subscribe(playerSvcList => {
      console.log('list of players...');
      console.log(playerSvcList);
      this.players = playerSvcList;
    });
  }
  
  setSortBy(column: string): void {
    this.sortBy = column;
  }

}
