import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamService } from '../../../service/team.service';
import { Team } from '../../../model/team';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {
  title: string = 'Update Team';
  id: string;
  resp: any;
  team: Team;

  constructor(private teamSvc: TeamService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = 
                               parms['id']);
    this.teamSvc.get(this.id)
      .subscribe(teams => {
        this.team = teams.length > 0 ?
        teams[0] : null;
        console.log(this.team);
    });
  }
  
  change () {
    console.log(this.team);
    this.teamSvc.change(this.team)
      .subscribe(resp => {
      this.resp = resp;
      console.log("Team-Change:", this.resp);
      this.router.navigate(['/team/detail/'+this.id]);
    });
  }

}
