import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  gridForm: any;
  table = [[]];

  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef) {
    this.gridForm = this.formBuilder.group({
      rowField: ['3', [Validators.required, Validators.minLength(1)]],
      colField: ['6', [Validators.required, Validators.minLength(1)]]
    });

    this.gridForm.get("rowField").valueChanges.subscribe(() => this.drawGrid());
    this.gridForm.get("colField").valueChanges.subscribe(() => this.drawGrid());
  }

  ngOnInit() {
    this.drawGrid();
  }

  get rowField() { return this.gridForm.get('rowField'); }
  get colField() { return this.gridForm.get('colField'); }

  drawGrid = () => {
    let rows: number = this.gridForm.get('rowField').value;
    let cols: number = this.gridForm.get('colField').value;

    this.table = null; //Vider la variable table.
    //Recréer le table.
    this.table = new Array(rows);
    for (let i = 0; i < rows; i++) {
      this.table[i] = [];
      for (let j = 0; j < cols; j++) {
        this.table[i][j] = "";
      }
    }
    console.log(this.table);
    // Appeler la detection de changement.
    this.cd.detectChanges();
  }

}
