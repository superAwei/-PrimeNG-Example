import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
[x: string]: any;
  title = 'PrimeNG_Demo';
  value: any; // 或者使用更具體的類型，例如 string 或 number
  // 其他屬性和方法
  stateOptions: any[] = [
    {label: '待在原地', value: 'Option1'},
    {label: '快逃', value: 'Option2'},
    // 其他選項
  ];

 selectedNodes: any[] = []; // 用於存儲選中的節點
 nodes: any[] = [
    {
      label: 'Node 1',
      value: 'Node1',
      children: [
        {label: 'Child Node 1', value: 'ChildNode1'},
        {label: 'Child Node 2', value: 'ChildNode2'}
      ]
    },
    {
      label: 'Node 2',
      value: 'Node2',
      children: [
        {label: 'Child Node 3', value: 'ChildNode3'},
        {label: 'Child Node 4', value: 'ChildNode4'}
      ]
    }
 ];

 cities = [
  {name: 'New York', code: 'NY'},
  {name: 'Rome', code: 'RM'},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Paris', code: 'PRS'}
];
selectedCity: any = null;
 
}
