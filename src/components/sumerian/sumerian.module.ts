import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumerianComponent } from './sumerian.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app/app-routing.module';

@NgModule({
  declarations: [SumerianComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  bootstrap: [SumerianComponent],
})
export class SumerianModule {}
