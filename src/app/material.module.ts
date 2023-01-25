import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatTableModule, MatInputModule,
    MatFormFieldModule, MatSelectModule, MatSortModule, MatDialogModule, MatTabsModule, MatSlideToggleModule],
  exports: [MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatTableModule, MatInputModule,
    MatFormFieldModule, MatSelectModule, MatSortModule, MatDialogModule, MatTabsModule, MatSlideToggleModule],
})
export class MaterialModule { }
