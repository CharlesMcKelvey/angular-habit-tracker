import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './components/entry/entry.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
	declarations: [ AppComponent, EntryComponent, HomeComponent, DashboardComponent, BarChartComponent ],
	imports: [ BrowserModule, AppRoutingModule, ChartsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
