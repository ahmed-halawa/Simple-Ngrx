import { NgModule } from '@angular/core';

import {
  MatExpansionModule,
  MatToolbarModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatIconModule
} from '@angular/material';

const MATERIAL_COMPONENTS = [
  MatExpansionModule,
  MatToolbarModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatIconModule
];

@NgModule({
  imports: [...MATERIAL_COMPONENTS],
  exports: [...MATERIAL_COMPONENTS]
})
export class DoctorsMaterialModule {}
