import { Component, Input, OnInit } from '@angular/core';
import { GoogleChartsModule, ChartType } from 'angular-google-charts';
import { survived, not_survived } from 'src/app/services/firebase.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {


  surviv:number = 2;
  not_survived: number = 4;

  // tester: string = "<google-chart [title]='chart.title' [type]='chart.type' [data]='chart.data' [columns]='chart.columnsNames' [options]='chart.options'></google-chart>";

  chart = {
    title: "Result",
    type: ChartType.PieChart,
    data: [['On suvécus', 3], ['Non pas survécus', 4]],
    columnsNames: ["Survived", "Not survived"],
    options: {
      colors: ['#e0440e', '#e6693e', '#ec8f6e'],
      is3D: true
    }
  }

  constructor(private http: HttpClient) {
    // console.log('Log de chart/survived.lenght',this.surviv.length);
    // this.test();
   }

  ngOnInit(): void {
    console.log('Survivant Firebase Service',survived);

  }

  test(){
    this.surviv++
    // let gc_component = $("#gc-container");
    // let gc = document.createElement('google-chart');
    // gc.setAttribute("[title]", "chart.title");
    // gc.setAttribute("[type]", "chart.type");
    // gc.setAttribute("[data]", "chart.data");
    // gc.setAttribute("[columns]", "chart.columnsNames");
    // gc.setAttribute("[options]", "chart.options");
    // gc_component?.appendChild(gc);
    // gc_component?.innerHTML("<google-chart [title]='chart.title' [type]='chart.type' [data]='chart.data' [columns]='chart.columnsNames' [options]='chart.options'></google-chart>")
// See too Jquey method load()
    // this.http.get('./chart.html');
  }

}
