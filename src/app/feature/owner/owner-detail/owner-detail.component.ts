import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../../../service/owner.service';
import { Owner } from '../../../model/owner';


@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  title: string = "Team Detail";
  owner: Owner;

  constructor(private ownerSvc: OwnerService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getOwnerById(id);
    });
  }
  
  getOwnerById(id) {
    this.ownerSvc.get(id)
      .subscribe(owners => {
        this.owner = owners.length > 0 ?
        owners[0] : null;
        console.log("Owner:", this.owner);
    });
  }

}
