import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SandboxComponent } from './components/sandbox.component';

@NgModule({
  declarations: [
    AppComponent, 
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, SandboxComponent]
})
export class AppModule { }
