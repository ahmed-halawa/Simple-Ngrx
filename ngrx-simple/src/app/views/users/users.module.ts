import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OverlayModule } from '@angular/cdk/overlay';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FileUploadModule } from 'ng2-file-upload';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersRoutingModule } from './users-routing.module';

import * as fromMaterial from './material';
import * as fromStore from './store';
import * as fromContainers from './containers';
import * as fromServices from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersRoutingModule,
    fromMaterial.DoctorsMaterialModule,
    NgxChartsModule,
    OverlayModule,
    FileUploadModule,
    StoreModule.forFeature('users_feature', fromStore.reducers),
    EffectsModule.forFeature(fromStore.effects),
  ],
  declarations: [
    fromContainers.UsersGridComponent,
    fromContainers.CardDetailsComponent
  ],
  providers: [fromServices.UsersService]
})
export class UsersModule {}
