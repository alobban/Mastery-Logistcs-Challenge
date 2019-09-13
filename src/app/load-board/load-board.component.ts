import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-load-board',
  templateUrl: './load-board.component.html',
  styleUrls: ['./load-board.component.scss']
})
export class LoadBoardComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.dataService.loads);
  }

}
