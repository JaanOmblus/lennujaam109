import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
//import konsultandid from "./konsultandid.json";
//import { SampleJson } from './sampleJson';

import { konsultantideNimekiri } from './konsultandid2';

//import { SampleJson } from "/home/projects/bzkfnq-qq3qff/src/app/konsultant/sampleJson"

//import * as SampleJSON from './sampleJson.json';
//https://stackoverflow.com/questions/34944099/how-to-import-a-json-file-in-ecmascript-6

//https://stackoverflow.com/questions/57141983/cannot-find-module-on-import-with-local-json-file

@Component({
  selector: 'konsultant-component',
  templateUrl: './konsultant.component.html',
  styleUrls: ['./konsultant.component.scss']
})
export class KonsultantComponent implements OnInit{

  maakonnanimi:string;
  Eesnimi:string;
  kooonsultArray: any = [];
  nimeke = "Wkkeerlzzdyydf";
  valjamuutuja: string;


  ngOnInit() {
  
    for (let key in konsultantideNimekiri) {
      if (konsultantideNimekiri.hasOwnProperty(key)) {
        this.kooonsultArray.push(konsultantideNimekiri[key]);
      }
      this.filterKirjet();
     // konsultantideNimekiri.Eesnimi;

     localStorage.setItem("Array", this.kooonsultArray);

      this.maakonnaValik();
      this.filterKirjet2();

    }

    

    //alert(this.maakonnanimi);
    //alert(this.kooonsultArray);


  }

   


  maakonnaValik() {

    this.maakonnanimi = "Harju maakond";

  }

  //"MAAKOND": "Harju maakond"

  //oigeKirje:any;

  filterKirjet(){
    var oigeKirje= this.kooonsultArray.filter(e=>{
      return e.Eesnimi === this.nimeke
    })

  oigeKirje.forEach(obj=> {
    console.log(obj.Asutus);
    localStorage.setItem("Firmanimi", obj.Asutus); 
    
  });

  }


  //for (var index in indexar) {
  //  console.log('Indexx:', index); // prints indexes: 0, 1, 2, 3
  
  //  console.log('Index array:', indexar[index]); // prints elements: 10, 20, 30, 40
  //}

  
//}

  filterKirjet2(){
 

    interface MyObj {
      Eesnimi: string;
      Perenimi: number;
    }

    for (let index in konsultantideNimekiri) {

      if (konsultantideNimekiri[index].Eesnimi === "Weerlzzdyydf") {
        console.log("Siin see on");
      }
      console.log(index);
      console.log(konsultantideNimekiri[index]);
      console.log(konsultantideNimekiri[index].Eesnimi);
      this.valjamuutuja = konsultantideNimekiri[index].Email;
  
     // let obj: MyObj = JSON.parse(konsultantideNimekiri);
//console.log(obj.Eesnimi);
//console.log(obj.Perenimi);

    //https://stackoverflow.com/questions/38688822/how-to-parse-json-string-in-typescript  
    //var oigeKirje= this.kooonsultArray[index].filter(e=>{
    //  return e.MAAKOND === this.maakonnanimi
    //})

  //oigeKirje.forEach(obj=> {
  //  console.log(obj.Asutus);
  //  localStorage.setItem("Firmanimi", obj.Asutus); 
    
  //});

  }
  }




}