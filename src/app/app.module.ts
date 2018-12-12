import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatabaseService } from './core/database.service';
import { LoginModule } from './login/login.module';
import { AuthenticationGuard } from './core/guard/authentication.guard';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(DatabaseService),
      LoginModule,
      AppRoutingModule
   ],
   providers: [
      AuthenticationGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
