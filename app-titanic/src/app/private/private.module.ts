import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { AnalyzesComponent } from './analyzes/analyzes.component';
import { ResultComponent } from './result/result.component';
import { HomePrivateComponent } from './home-private/home-private.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AnalyzesComponent,
    ResultComponent,
    HomePrivateComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule
  ],
  exports: [
    FormsModule
  ]
})
export class PrivateModule { }
