import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ATasks';
  data:any;
  fn(e){
    console.log(e);
    this.data = e;
  }

  tests = [{
    id: 1, name: 'UI' , selected : false,
  },
  {
    id: 2, name: 'Java'  , selected : false,
  },
  {
    id: 3, name: '.Net'  , selected : false,
  },  
]
}
