import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Load } from '../type-definitions/load';

@Component({
  selector: 'app-load-info',
  templateUrl: './load-info.component.html',
  styleUrls: ['./load-info.component.scss']
})
export class LoadInfoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { load: Load },
    public dialogRef: MatDialogRef<LoadInfoComponent>
    ) { }

  ngOnInit() {
    console.log(this.data.load);
  }

  closeDialog(): void {
    this.data.load.locked = !this.data.load.locked;
    this.dialogRef.close(this.data.load);
  }

}
