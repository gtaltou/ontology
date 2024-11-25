import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportOntologyComponent } from '../import-ontology/import-ontology.component';
import { ImportPathComponent } from '../import-path/import-path.component';

@Component({
  selector: 'app-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.scss'],
})
export class ActionMenuComponent {
  constructor(private dialog: MatDialog) {}

  openOntologyDialog(): void {
    this.dialog.open(ImportOntologyComponent);
  }

  openPathDialog(): void {
    this.dialog.open(ImportPathComponent);
  }
}
