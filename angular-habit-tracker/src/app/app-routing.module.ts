import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { BarChartComponent } from 'src/app/bar-chart/bar-chart.component';

const routes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	// This is a fake login page that requires a static user and password. Saved in LocalStorage
	// The dashboard will not be user specific because of the above. If this becomes a MEAN app, it will be implemented
	{ path: 'bar-chart', component: BarChartComponent },
	{ path: '**', component: HomeComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
