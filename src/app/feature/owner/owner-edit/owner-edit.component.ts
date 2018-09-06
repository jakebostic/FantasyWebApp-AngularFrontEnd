import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OwnerService } from '../../../service/owner.service';
import { Owner } from '../../../model/owner';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit {
  title: string = 'Update Team';
  id: string;
  resp: any;
  owner: Owner;
  

  constructor(private ownerSvc: OwnerService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = 
    parms['id']);
    this.ownerSvc.get(this.id)
      .subscribe(owners => {
        this.owner = owners.length > 0 ? 
        owners[0] : null;
        console.log(this.owner);
    });
  }
  
  change () {
    console.log(this.owner);
    this.ownerSvc.change(this.owner)
      .subscribe(resp => {
      this.resp = resp;
      console.log("Owner-Change:", this.resp);
      this.router.navigate(['/owner/detail/'+this.id]);
    });
  }

}
