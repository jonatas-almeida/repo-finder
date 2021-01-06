import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoComponent } from './components/repo/repo.component';
import { UserReposComponent } from './components/user-repos/user-repos.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'usuarios',
    component: UserReposComponent
  },
  {
    path: 'repositorios',
    component: RepoComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
