import { Component, OnInit } from '@angular/core';
import Data from 'src/data/hobbies.habit.json';

function sortData(data) {
	// Array of Objects
	let sortedData = data.slice().sort((a: any, b: any) => {
		let dateA = new Date(a.date).getTime();
		let dateB = new Date(b.date).getTime();
		return dateA - dateB;
	});
	return sortedData;
}

function getLabels(data) {
	let labels = [];
	for (let i = 0; i < data.length; i++) {
		if (labels.indexOf(data[i].date)) {
			labels.push(data[i].date);
		}
	}
	return labels;
}

function getLabels2(data) {
	// What does the ... mean?
	// I understand how the data.map() and on works cause it is taking the data with the iterable item
	// and then grabbing the date property of that item. Because this is a Set, it has to be unique.
	// Now we need to figure out how to turn it into a Month of the year object that also stores all
	// of the info inside of it.
	// After: https://oprea.rocks/blog/what-do-the-three-dots-mean-in-javascript/
	// The ... is actually very interesting. What you are doing is taking the Set object to only
	// get unique elements but because we have wrapped it in [], we are creating an Array object.
	// Thusly, we are creating an Array with unique elements (in this case dates)
	const unique = [ ...new Set(data.map((item) => item.date)) ];
	return unique;
}

@Component({
	selector: 'app-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: [ './bar-chart.component.css' ]
})
export class BarChartComponent implements OnInit {
	constructor() {}

	sortedData = sortData(Data);
	labels = getLabels2(this.sortedData);
	day = this.sortedData[1].date;
	day2 = this.sortedData[2].date;

	// Just style options
	public barChartOptions = {
		scaleShowVerticalLines: false,
		responsive: true
	};

	// This will need to be apart of the function to sort the data given the habit
	public barChartLabels = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];

	// General info
	public barChartType = 'bar';
	public barChartLegend = 'true';

	// This will need to be apart of the final function.
	public barChartData = [
		{ data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
		{ data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
	];

	ngOnInit(): void {}
}
