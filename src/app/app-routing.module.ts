import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'listMovies', component: ListMoviesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
