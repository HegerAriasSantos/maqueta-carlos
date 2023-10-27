import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipComponent } from './shared/tooltip/tooltip.component';
import { ModalComponent } from './shared/modal/modal.component';
import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    ModalComponent,
    CreateComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
