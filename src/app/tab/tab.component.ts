import { Component, OnInit } from '@angular/core';
import { Itab } from '../models/tab';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  selectedFrameWork : string = 'angular'
  
  tabArr : Array<Itab> = [
    {
      tabTitle : 'angular',
      tabContent : '<p class="m-0 alert alert-warning"><strong>Angular</strong> is a framework</p>'
    },
    {
      tabTitle : 'javascript',
      tabContent : '<p class="m-0 alert alert-warning"> <strong>Javascript</strong> is used for create dynamic web pages</p>'
    },
    {
      tabTitle : 'typescript',
      tabContent : '<p class="m-0 alert alert-warning"> <strong>Typesript</strong> it is a blueprint of javascript</p>'
    }
      
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onTab(val : string){
    this.selectedFrameWork = val;

  }

}
