import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginPageComponent } from './paginas/login-page/login-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PrincipalAdminComponent } from './paginas/admin/principal-admin/principal-admin.component';
import { ToolbarAdminComponent } from './paginas/admin/toolbar-admin/toolbar-admin.component';
import {MatMenuModule} from '@angular/material/menu';
import { HelloAdminComponent } from './paginas/admin/hello-admin/hello-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PrincipalAdminComponent,
    ToolbarAdminComponent,
    HelloAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
