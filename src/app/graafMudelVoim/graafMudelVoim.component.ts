import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'graafmudelvoim',
  templateUrl: './graafMudelVoim.component.html',
  styleUrls: [ './graafMudelVoim.component.scss' ]
})
export class GraafMudelVoimComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
                
      title: {
        text: '',
        left: 'center',
        top: 'center'
      },
      color: ['#EFB2B2', '#FFE1A0', '#ACCFBA'],
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 40,
              name: 'Madal'
            },
            {
              value: 32,
              name: 'Keskmine'
            },
            {
              value: 28,
              name: 'Kõrge'
            }
          ],
          radius: ['40%', '70%']
        }
      ]
        
    };
  }
}