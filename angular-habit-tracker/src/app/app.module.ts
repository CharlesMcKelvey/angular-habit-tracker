import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SingleChartComponent } from './components/single-chart/single-chart.component';
import { EntryComponent } from './components/entry/entry.component';
import { StatsComponent } from './components/stats/stats.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HabitComponent } from './components/habit/habit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		LayoutComponent,
		SingleChartComponent,
		EntryComponent,
		StatsComponent,
		HomeComponent,
		LoginComponent,
		HabitComponent,
		DashboardComponent
	],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
