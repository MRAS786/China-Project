import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/Login/login.component';
import { LayoutComponent } from './Pages/Shared/Layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,  children: [

    ]
  },
  {path:'login',component:LoginComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
