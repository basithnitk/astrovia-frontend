import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatTableModule],
  exports: [MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatTableModule],
})
export class MaterialModule {}
