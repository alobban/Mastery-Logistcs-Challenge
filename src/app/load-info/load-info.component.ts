import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Load } from '../type-definitions/load';

@Component({
  selector: 'app-load-info',
  templateUrl: './load-info.component.html',
  styleUrls: ['./load-info.component.scss']
})
export class LoadInfoComponent implements OnInit {
  loadForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { load: Load },
    public dialogRef: MatDialogRef<LoadInfoComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loadForm = this.fb.group({
      status: []
    });
    this.syncFormData();
  }

  syncFormData() {
    this.loadForm.patchValue({
      status: this.data.load.status
    });
    if (this.data.load.locked) {
      this.loadForm.get('status').disable();
    }
  }

  closeDialog(): void {
    this.data.load.status = this.loadForm.get('status').value;
    this.dialogRef.close(this.data.load);
  }

}
