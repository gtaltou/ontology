import { Component } from '@angular/core';
// @ts-ignore
import { PathImportService } from '../../../core/services/path-import.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-import-path',
  templateUrl: './import-path.component.html',
  styleUrls: ['./import-path.component.scss'],
  standalone: true
})
export class ImportPathComponent {
  selectedFile: File | null = null;
  isLoading = false;

  constructor(
    private pathImportService: PathImportService,
    private snackBar: MatSnackBar
  ) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onImport(): void {
    if (!this.selectedFile) {
      this.snackBar.open('Veuillez sélectionner un fichier avant de continuer.', 'Fermer', { duration: 3000 });
      return;
    }

    this.isLoading = true;
    this.pathImportService.validateFile(this.selectedFile).subscribe({
      next: () => {
        // Simulate import
        setTimeout(() => {
          this.isLoading = false;
          this.snackBar.open('Importation réussie !', 'Fermer', { duration: 3000 });
        }, 2000);
      },
      error: (err: { message: string; }) => {
        this.isLoading = false;
        this.snackBar.open(err.message, 'Fermer', { duration: 3000 });
      },
    });
  }

  onCancel(): void {
    this.selectedFile = null;
  }





}
