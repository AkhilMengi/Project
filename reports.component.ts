import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  chart_emp= [];
  constructor(private _main:MainService) { }

  ngOnInit() {
    this._main.emp()
    .subscribe(res =>
      {
        console.log(res);
        let temp_max = res['list'].map(res => res.main.temp_max);
        let temp_min = res['list'].map(res => res.main.temp_min);
        let deg = res['list'].map(res => res.wind.deg);
        let speed = res['list'].map(res => res.wind.speed);
        let alldates = res['list'].map(res => res.dt)

        let weatherDates = []
        alldates.forEach((res) => {
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        })
        console.log(weatherDates);
        this.chart_emp = new Chart('emp_line', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: "red",
                borderWidth:1,
                lineTension:0.2,
                fill: true,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
                
              },
              {
                data: temp_min,
                borderColor: "blue",
                borderWidth:1,
                lineTension:0.2,
                fill: true,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],

              },
            ]
          },
           options: {
               legend: {
                 display: true
               },
              scales: {
                 xAxes: [{
                  
                   display: true,
                   
 
                 }],
                 yAxes: [{
                   display: true
                 }],
               } 
             }
        });
        this.chart_emp = new Chart('emp_bar', {
          type: 'bar',
          animationEnabled:true,
          axisX:{
            intervsl:10,
          },
          data: {
            labels: weatherDates,
            datasets: [
              { 
                label: 'temp_max',
                data: temp_max,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
                
                fill: true
              },
              { 
                label: 'temp_min',
                data: temp_min,
                
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
                fill: true
              },
            ]
          },
          options: {
            legend: {
              display: true
            },
           scales: {
              xAxes: [{
               
                display: true
              }],
              yAxes: [{
                display: true
              }],
            } 
          } 
        });
        this.chart_emp = new Chart('emp_pie', {
          type: 'line',
          animationEnabled:true,
          axisX:{
            intervsl:10,
          },
          data: {
            labels: weatherDates,
            datasets: [
              { 
                data: temp_max,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
                
                fill: true
              },
              { 
                data: temp_min,
                
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
                fill: true
              },
            ]
          },
          options: {
            legend: {
              display: true
            },
           scales: {
              xAxes: [{
               
                display: true
              }],
              yAxes: [{
                display: true
              }],
            } 
          } 
        });
        this.chart_emp = new Chart('proj_line', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: deg,
                borderColor: "red",
                borderWidth:1,
                lineTension:0.2,
                fill: true,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
                
              },
              {
                data: speed,
                borderColor: "blue",
                borderWidth:1,
                lineTension:0.2,
                fill: true,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],

              },
            ]
          },
           options: {
               legend: {
                 display: true
               },
              scales: {
                 xAxes: [{
                  
                   display: true,
                   
 
                 }],
                 yAxes: [{
                   display: true
                 }],
               } 
             }
        });
        this.chart_emp = new Chart('proj_bar', {
          type: 'bar',
          animationEnabled:true,
          axisX:{
            intervsl:10,
          },
          data: {
            labels: weatherDates,
            datasets: [
              { 
                data: deg,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
                
                fill: false
              },
              { 
                data: speed,
                
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: true
            },
           scales: {
              xAxes: [{
               
                display: true
              }],
              yAxes: [{
                display: true
              }],
            } 
          } 
        });
        this.chart_emp = new Chart('proj_pie', {
          type: 'pie',
          animationEnabled:true,
          axisX:{
            intervsl:10,
          },
          data: {
            labels: weatherDates,
            datasets: [
              { 
                data: deg,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
                
                fill: true
              },
              { 
                data: speed,
                
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
                fill: true
              },
            ]
          },
          options: {
            legend: {
              display: true
            },
           scales: {
              xAxes: [{
               
                display: true
              }],
              yAxes: [{
                display: true
              }],
            } 
          } 
        });
        

      })
    
  }

}
