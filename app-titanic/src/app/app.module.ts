import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PrivateModule } from './private/private.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './public/home/home.component';
// import { MarkdownModule } from 'ngx-markdown';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { SecurityContext } from '@angular/core';

// MarkdownModule.forRoot({
//   sanitize: SecurityContext.NONE
// })

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    PrivateModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
