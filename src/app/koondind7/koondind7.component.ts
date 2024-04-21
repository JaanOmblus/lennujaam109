import { Component } from '@angular/core';

//declare var d3: any;

@Component({
  selector: 'koondind7-component',
  templateUrl: './koondind7.component.html',
  styleUrls: ['./koondind7.component.scss']
})
export class Koondind7Component {

  value = 0.3;
  thick = 25;
  label = "Elujõud"
  gaugeAppendText=""
  max=1;
  min=-1;
  gaugeDuration = 1000;
  gaugeAnimate = false;
  thresholdConfig = {
  '-1': {color: '#d73e3e'},
  '-0.3': {color: '#ffcf00'},
  '0.8': {color: '#008936'}
};
markers = { "0": { color: "#555", type: "triangle", size: 8, label: "Keskmine", font: "12px arial" }, "-0.7": { color: "#555", type: "triangle", size: 8, label: "Madal", font: "12px arial" }, "0.7": { color: "#555", type: "triangle", size: 8, label: "Kõrge", font: "12px arial" } };

}