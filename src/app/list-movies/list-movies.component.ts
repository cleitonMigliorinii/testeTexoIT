import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import { ColumnDefination } from '../model/columnDefination';
import { Movies } from '../model/movies.dto';

const SIZE_RETURN_REGISTER = 15;

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit   {

  constructor(private http: HttpClient) {}
 
  @ViewChild('paginator') paginator : PaginatorComponent;

  columnsDefination: ColumnDefination[] = [
    {
      name: 'Id',
      defination: 'id'
    }, {
      name: 'Year',
      defination: 'year'
    } 
    , {
      name: 'Title',
      defination: 'title'
    } 
    , {
      name: 'Winner ?',
      defination: 'winner'
    } 
  ];

  listMovies: Movies[];

  dataSource = new MatTableDataSource<any>([]);
  totalPages= 0
  pageIndex=0;
  searchYear = "";
  searchWinner = "";
  


  ngOnInit(): void {
    this.searchMoviesList(this.pageIndex);
  }


  searchMoviesList(page?){
    this.http.get(environment.api + `?page=${page}&size=${SIZE_RETURN_REGISTER}${this.mountFilter()}`).subscribe( (list : any) =>{
        this.listMovies = list.content;
        this.totalPages = list.totalPages;
        this.paginator.initPaginator(this.totalPages);
        this.pageIndex = page;
    });

  }

  mountFilter(){

    let where = "";

    parseInt(this.searchYear) > 0 ? where += `&year=${this.searchYear}` : ''; 

    this.searchWinner != "" ? where += `&winner=${this.searchWinner == "Y" ? true: false}` : '';

    return where;
  }


}
