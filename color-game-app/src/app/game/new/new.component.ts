import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  gridForm: any;
  table: string[][];
  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef) { 

  }

  ngOnInit() {
    this.gridForm = this.formBuilder.group({
      rowField: [3, [Validators.required, Validators.minLength(1)]],
      colField: [6, [Validators.required, Validators.minLength(1)]]
    });
  }

  drawGrid = () => {
    let rows: number = this.gridForm.get('rowField').value;
    let cols: number = this.gridForm.get('colField').value;

    this.table = null; //Vider la variable table.
    //Recréer le table.
    this.table = new Array(cols);
    for(let i=0; i < cols; i++) {
      this.table[i] = new Array<string>(rows);
    }
    // Appeler la detection de changement.
    this.cd.detectChanges();
  }

}
