import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/Login/login.component';
import { FooterComponent } from './Pages/Shared/Footer/footer.component';
import { LayoutComponent } from './Pages/Shared/Layout/layout.component';
import { LeftmenuComponent } from './Pages/Shared/LeftMenu/leftmenu.component';
import { TopbarComponent } from './Pages/Shared/Topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    LayoutComponent,
    LeftmenuComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
