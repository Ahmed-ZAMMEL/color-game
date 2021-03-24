import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  caseStyle = {'background-color': ''};
  @Output() colorChange:EventEmitter<String> = new EventEmitter<String>();
  @Input() color:string;

  constructor() { }

  ngOnInit() {}

  getColor = () => {
    let colorInput = prompt("insert color", "");
    this.caseStyle = {'background-color': colorInput};
    console.log( this.caseStyle);

    //this.colorChange.emit(colorInput);
    console.log(this.color);
  }

}