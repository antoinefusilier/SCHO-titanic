import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { Router } from '@angular/router';
import { docsGetted, survived, not_survived } from 'src/app/services/firebase.service';
import { ElementRef } from '@angular/core';
import { GoogleChartComponent, ChartType } from 'angular-google-charts';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
// @ViewChild('monElementHTML') monElement: ElementRef;
export class ResultComponent implements OnInit {

  chart = {
    title: "Result",
    type: ChartType.PieChart,
    columnsNames: ["Survived", "Not survived"],
    options: {
      colors: ['#e0440e', '#e6693e', '#ec8f6e'],
      is3D: true
    }
  }


  passengers: Array<any> = [];
  // https://github.com/FERNman/angular-google-charts
  // sur: number = survived.length;
  // Default value debugging into firebase service constante of survived and not_survived
  // Can't refresh HTML before variables :/

  // To it input/output or firebase function
  sur: any = ['test','test','test'];
  not_sur: any = ['test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test'];




  // [title] = "chart.title"[type] = "chart.type"[data] = "chart.data"[columns] = "chart.columnNames"
  // [options] = "chart.options"
  constructor(private router: Router,
    private renderer: Renderer2) {

    console.log("result: this.passengers: ",this.passengers);
    console.log('constructor result not s:',not_survived);
   }

  ngOnInit(): void {
    this.passengers = [];
    this.passengers = docsGetted;
    console.log('Pushing to passengers : (docsGetted)',docsGetted);

    this.loading();
    this.sur = survived.length;
    this.not_sur = not_survived.length;
    console.log('survivant apres init ',this.sur);
    console.log('non survivant apres init',this.not_sur);
    console.log('non survivant apres init', survived.length);
    console.log('non survivant apres init', not_survived.length);





  }
  loading(){
    this.sur = survived.length;
    console.log(this.sur);

    this.not_sur = not_survived.length;
    console.log(this.not_sur);

  }


  backAnalyze(){

    this.router.navigate(['/admin/analyzes']);
    console.log("Going back to analyze !");

  }

}
