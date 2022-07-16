import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// COMPONENTS public
import { HomeComponent } from './public/home/home.component';
import { MenuComponent } from './public/menu/menu.component';
import { LoginComponent } from './public/login/login.component';

// COMPONENTS private
import { AnalyzesComponent } from './private/analyzes/analyzes.component';
import { ResultComponent } from './private/result/result.component';

// COMPONENTS admin
import { DashboardComponent } from './admin/dashboard/dashboard.component';

// GUARDS
import { UserGuard } from './user.guard';
import { AdminGuard } from './admin.guard';
import { HomePrivateComponent } from './private/home-private/home-private.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'public/home',
    pathMatch: 'full'
  },
  {
    path: 'private/home',
    component: HomePrivateComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    canActivate: [AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
