import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './../admin/dashboard/dashboard.module';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./../admin/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '',
    loadChildren: () => import('./../login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
