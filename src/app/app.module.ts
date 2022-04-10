import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/Login/login.component';
import { FooterComponent } from './Pages/Shared/Footer/footer.component';
import { LayoutComponent } from './Pages/Shared/Layout/layout.component';
import { LeftmenuComponent } from './Pages/Shared/LeftMenu/leftmenu.component';
import { TopbarComponent } from './Pages/Shared/Topbar/topbar.component';
import { RegisterComponent } from './Pages/Register/register.component';
import { ForgetComponent } from './Pages/ForgetPassword/forget.component';
import { ResetpasswordComponent } from './Pages/ResetPassword/resetpassword.component';
import { RegisteraccountmessageComponent } from './Pages/AccountRegisterMessage/registeraccountmessage.component';
import { ResetpasswordmessageComponent } from './Pages/ResetPasswordMessage/resetpasswordmessage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    LayoutComponent,
    LeftmenuComponent,
    TopbarComponent,
    RegisterComponent,
    ForgetComponent,
    ResetpasswordComponent,
    RegisteraccountmessageComponent,
    ResetpasswordmessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
