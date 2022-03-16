import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ColumnDefination } from '../model/columnDefination';
import { GroupIntervalForProducers } from '../model/groupIntervalForProducers.dto';
import { GroupYearMultipleWinners } from '../model/groupYearMultipleWinners.dto';
import { MovieWinnersByYear } from '../model/movieWinnersByYear.dto';
import { StudiosWithWinners } from '../model/studiosWithWinners.dto';
import { GroupStudiosWithWinners } from '../model/studiosWithWinners.dto copy';
import { YearMultipleWinners } from '../model/yearMultipleWinners.dto';

export interface PeriodicElement {
  year: number;
  winnerCount: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  columnsDefinationYearsWinners: ColumnDefination[] = [
    {
      name: 'Year',
      defination: 'year'
    }, {
      name: 'Winner Count',
      defination: 'winnerCount'
    } 
  ];
  columnsDefinationTopStudio: ColumnDefination[] = [
    {
      name: 'Name',
      defination: 'name'
    }, {
      name: 'Win Count',
      defination: 'winCount'
    } 
  ];
  columnsDefinationProducets: ColumnDefination[] = [
    {
      name: 'Producer',
      defination: 'producer'
    }, {
      name: 'Interval',
      defination: 'interval'
    }, {
      name: 'Previous Year',
      defination: 'previousWin'
    } , {
      name: 'Following Year',
      defination: 'followingWin'
    } 
  ];
  columnsDefinationMovieWinners: ColumnDefination[] = [
    {
      name: 'Id',
      defination: 'id'
    }, {
      name: 'Year',
      defination: 'year'
    }, {
      name: 'Title',
      defination: 'title'
    }
  ];

  listYearsWithMultipleWinners: YearMultipleWinners[] = [];
  listTopThreeStudiosWinners: StudiosWithWinners[] = [];
  listIntervalForProducers: GroupIntervalForProducers = new GroupIntervalForProducers(); 
  listMovieWinnersByYear: MovieWinnersByYear[] = [];

  yearFilter = 0;


  ngOnInit(): void {
    this.searchYearsWithMultipleWinners();
    this.searchTopThreeStudiosWithWinners();
    this.searchMaxMinWinIntervalForProducers();
  }

  searchYearsWithMultipleWinners(){

    this.http.get<GroupYearMultipleWinners>(environment.api + "?projection=years-with-multiple-winners")
        .subscribe( (result : GroupYearMultipleWinners) =>{

        this.listYearsWithMultipleWinners = result.years;
    });

  }

  searchTopThreeStudiosWithWinners(){

    this.http.get<GroupStudiosWithWinners>(environment.api + "?projection=studios-with-win-count")
      .subscribe( (result : GroupStudiosWithWinners) =>{

        this.listTopThreeStudiosWinners = result.studios.slice(0,3);
    });

  }

  searchMaxMinWinIntervalForProducers(){

    this.http.get<GroupIntervalForProducers>(environment.api + "?projection=max-min-win-interval-for-producers")
      .subscribe( (result : GroupIntervalForProducers) =>{
        this.listIntervalForProducers = result;
    });

  }

  searchMovieWinnersByYear(year :number){

    this.http.get<MovieWinnersByYear[]>(environment.api + `?winner=true&year=${year}`)
      .subscribe( (result : MovieWinnersByYear[]) =>{
        this.listMovieWinnersByYear = result;
    });

  }


}
