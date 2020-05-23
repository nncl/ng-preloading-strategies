import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignComponent } from './pages/sign/sign.component';
import { InputModule } from './components/inputs/input/input.module';
import { FormsModule } from '@angular/forms';
import { TabsModule } from './components/tabs/tabs/tabs.module';

@NgModule({
  declarations: [
    AppComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputModule,
    FormsModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
