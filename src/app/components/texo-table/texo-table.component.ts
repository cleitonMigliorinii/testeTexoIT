import { Component, Input, OnInit } from '@angular/core';
import { ColumnDefination } from 'src/app/model/columnDefination';

@Component({
  selector: 'app-texo-table',
  templateUrl: './texo-table.component.html',
  styleUrls: ['./texo-table.component.css']
})
export class TexoTableComponent implements OnInit {

  constructor() { }

  @Input() dataSource: any;
  @Input() listColumDef: ColumnDefination[];
  displayedColumns: String[] = [];
  
  ngOnInit(): void {

    this.listColumDef.forEach((item: ColumnDefination) => {
      this.displayedColumns.push(item.defination);
    });

  }

}
