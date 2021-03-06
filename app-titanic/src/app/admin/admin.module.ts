import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzesComponent } from '../private/analyzes/analyzes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AdminDirective } from './admin.directive';



@NgModule({
  declarations: [

    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    HttpClientModule
  ],
  exports: [
    FormsModule
  ]
})
export class AdminModule { }
