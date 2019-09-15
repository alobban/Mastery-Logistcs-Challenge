import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { DataService } from '../services/data.service';
import { Load } from '../type-definitions/load';
import { LoadInfoComponent } from '../load-info/load-info.component';

@Component({
  selector: 'app-load-board',
  templateUrl: './load-board.component.html',
  styleUrls: ['./load-board.component.scss']
})
export class LoadBoardComponent implements OnInit {
  loads: Load[] = [];
  detailView: MatDialogRef<LoadInfoComponent>;

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log(this.dataService.loadData);
    this.dataService.getLoads()
      .subscribe((loads: Load[]) => {
        this.loads = loads;
      });
    this.dataService.getDataObservable();
  }

  openDetails(load: Load): void {
    this.detailView = this.dialog.open(LoadInfoComponent, { width: '500px', height: '300px', data: { load } });
    this.detailView.afterClosed()
      .subscribe((updatedLoad: Load) => {
        if (updatedLoad) {
          this.dataService.updateLoadDetails(updatedLoad);
        }
      });
  }

}
