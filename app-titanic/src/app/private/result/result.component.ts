import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { Router } from '@angular/router';
import { docsGetted, survived, not_survived } from 'src/app/services/firebase.service';
import { ElementRef } from '@angular/core';
import { GoogleChartComponent, ChartType } from 'angular-google-charts';
import { ThisReceiver } from '@angular/compiler';
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
  p_open: any = {
    id: '',
    val: false
  }



  // [title] = "chart.title"[type] = "chart.type"[data] = "chart.data"[columns] = "chart.columnNames"
  // [options] = "chart.options"
  constructor(private router: Router,
    private renderer: Renderer2) {

    console.log("result: this.passengers: ",this.passengers);
    console.log('constructor result not s:',not_survived);

    // setTimeout(this.loading, 3000);
    // setInterval(this.loading, 3000)

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

    // this.loading();
    setTimeout(this.loading, 3000);


  }
  p_view(p_id: string) {
    console.log('Id selectionnée: ', p_id);
    console.log('Id enregistrée:', this.p_open.id, 'Val enregistrée: ', this.p_open.val);

    if (this.p_open.id !== p_id && this.p_open.val === true){
      this.p_open.id = p_id;
      this.p_open.val = true
      return
    }
    if (this.p_open.id == p_id && this.p_open.val === true){
      this.p_open.val = false;
      return
    }
    if (this.p_open.id == p_id && this.p_open.val === false){
      this.p_open.val = true;
      return
    }
    if (this.p_open.id !== p_id && this.p_open.val === false){
      this.p_open.id = p_id;
      this.p_open.val = true;
      return
    }

  }
  loading(){
    // while (this.sur !== 0 || this.not_sur !== 0) {
    //   continue
    // }
    setTimeout(()=>{
      this.sur = survived.length;
      console.log(this.sur);

      this.not_sur = not_survived.length;
      console.log(this.not_sur);

    }, 900)

  }

  surviveColor(){
    for(let i = 0; i<this.passengers.length; i++){
      if(this.passengers[i].Survived == 0){
        let li_i = document.getElementById("div "+this.passengers[i].id);
        if (li_i){
          li_i.style.backgroundColor = 'red';
        }
      }
    }
  }

  backAnalyze(){

    this.router.navigate(['/admin/analyzes']);
    console.log("Going back to analyze !");

  }

}
