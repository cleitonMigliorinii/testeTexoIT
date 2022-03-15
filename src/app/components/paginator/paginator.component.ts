import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() pageIndex;

  @Input() totalPages;

  @Output() 
  outPutChangePage = new EventEmitter<any>();

  listPages:number[] = [];

  constructor() { }

  ngOnInit(): void {

    for (var i = 0; i < this.totalPages; i++) {
      this.listPages[i] = i + 1;
    }

  }

  changePage(page){
    this.outPutChangePage.emit(page);
  }

  checkSelectedPage(page){
    return page === this.pageIndex + 1;
  }

}
