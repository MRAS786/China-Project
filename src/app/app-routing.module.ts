import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteraccountmessageComponent } from './Pages/AccountRegisterMessage/registeraccountmessage.component';
import { ForgetComponent } from './Pages/ForgetPassword/forget.component';
import { LoginComponent } from './Pages/Login/login.component';
import { AdminComponent } from './Pages/Master/Admin/admin.component';
import { ApplicantStatusComponent } from './Pages/Master/ApplicantStatus/applicant-status.component';
import { ReportComponent } from './Pages/Master/Report/report.component';
import { RoomComponent } from './Pages/Master/Room/room.component';
import { UserMangementComponent } from './Pages/Master/UserMangement/user-mangement.component';
import { RegisterComponent } from './Pages/Register/register.component';
import { ResetpasswordComponent } from './Pages/ResetPassword/resetpassword.component';
import { ResetpasswordmessageComponent } from './Pages/ResetPasswordMessage/resetpasswordmessage.component';
import { LayoutComponent } from './Pages/Shared/Layout/layout.component';
import { TestComponent } from './Pages/test/test.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,  children: [
      {path:'test',component:TestComponent, pathMatch:'full'},
      {path:'admin',component:AdminComponent, pathMatch:'full'},
      {path:'room',component:RoomComponent, pathMatch:'full'},
      {path:'applicantStatus',component:ApplicantStatusComponent, pathMatch:'full'},
      {path:'userMangement',component:UserMangementComponent, pathMatch:'full'},
      {path:'report',component:ReportComponent, pathMatch:'full'},
    ]
  },
  {path:'login',component:LoginComponent, pathMatch:'full'},
  {path:'register',component:RegisterComponent, pathMatch:'full'},
  {path:'forget',component:ForgetComponent, pathMatch:'full'},
  {path:'resetpassword',component:ResetpasswordComponent, pathMatch:'full'},
  {path:'registeraccountmessage',component:RegisteraccountmessageComponent, pathMatch:'full'},
  {path:'resetpasswordmessage',component:ResetpasswordmessageComponent, pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
