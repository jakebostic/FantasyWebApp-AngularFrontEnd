import { Component, OnInit } from '@angular/core';
import { Owner } from '../../model/owner';
import { OwnerService } from '../../service/owner.service';
import { RankPipe } from '../../pipe/rank.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  owners: Owner[];
  rankBy: string = "Ranking";

  constructor(private ownerSvc: OwnerService) { }

  ngOnInit() {
    this.ownerSvc.list().subscribe(owns => {
      this.owners = owns;
    });
  }
  
  setRankBy(column: string): void {
    this.rankBy = column;
  }

}
