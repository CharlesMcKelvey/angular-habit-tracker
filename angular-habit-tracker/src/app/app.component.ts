import { Component } from '@angular/core';
import Data from 'src/data/hobbiesHabit.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'angular-habit-tracker';
	data = Data;
}
