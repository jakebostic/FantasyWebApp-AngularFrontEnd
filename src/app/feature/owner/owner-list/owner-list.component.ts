import { Component, OnInit } from '@angular/core';
import { Owner } from '../../../model/owner';
import { OwnerService } from '../../../service/owner.service';
import { SortPipe } from '../../../pipe/sort.pipe';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Owner[];
  title: string = "Current Owners";
  sortBy: string = "Id";

  constructor(private ownerSvc: OwnerService) { }

  ngOnInit() {
    
    this.ownerSvc.list().subscribe(ownerSvcList => {
      console.log('list of owners...');
      console.log(ownerSvcList);
      this.owners = ownerSvcList;
    });
  }

  setSortBy(column: string): void {
    this.sortBy = column;
  }
  
}
