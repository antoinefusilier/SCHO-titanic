import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzesComponent } from './analyzes/analyzes.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartComponent } from './chart/chart.component';
import { HttpClientModule } from '@angular/common/http';
// import { AdminDirective } from './admin.directive';



@NgModule({
  declarations: [
    AnalyzesComponent,
    ResultComponent,
    SearchComponent,
    MenuComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    HttpClientModule
  ],
  exports: [
    AnalyzesComponent,
    FormsModule
  ]
})
export class AdminModule { }
