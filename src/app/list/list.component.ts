import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 @Output() show = new EventEmitter();

 call(){
  this.show.emit(this.students);
}
 
  students= [
    {
      "name":'venu',
      "id" : 101,
      "city": 'hyd',
      "present":true
    },
    {
     "name":'sai',
     "id" : 102,
     "city": 'pune',
     "present":false
    },
    {
     "name":'mahesh',
     "id" : 103,
     "city": 'vza',
     "present":true
    },
    {
     "name":'naveen',
     "id" : 104,
     "city": 'hyd',
     "present":true
    }
 ];

}
