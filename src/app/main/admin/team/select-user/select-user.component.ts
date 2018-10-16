import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.scss']
})
export class SelectUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SelectUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  /**
   * Closes the dialog and passes the selected user
   *
   * @param user
   */
  public selectUser(user): void {
    this.dialogRef.close(user);
  }

}
