import { Component, OnInit } from '@angular/core';
import { Team } from '../../../model/team';
import { TeamService } from '../../../service/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Team[];
  title: string = "All NFL Teams";

  constructor(private teamSvc: TeamService) { }

  ngOnInit() {
    
    this.teamSvc.list().subscribe(teamSvcList => {
      console.log('list of teams...');
      console.log(teamSvcList);
      this.teams = teamSvcList;
    });
  }

}
