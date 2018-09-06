import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../../../service/team.service';
import { Team } from '../../../model/team';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  title: string = "Team Detail";
  team: Team;

  constructor(private teamSvc: TeamService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
      let id = parms["id"];
      this.getTeamById(id);
    });
  }
  
  getTeamById(id) {
    this.teamSvc.get(id)
      .subscribe(teams => {
        this.team = teams.length > 0 ?
        teams[0] : null;
        console.log("Team:", this.team);
    });
  }

}
