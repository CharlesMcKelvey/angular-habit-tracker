// Considering we are dealing with dates, we may have 365 labels on a single chart
// I don't think UI wise that is pretty so we are going to desginate it by month
// Meaning any date that is within the range of that month will be accumulated and that will be the displayed data
// If a user were to click into that month's bar, it will show a further detailed analysis.
// ALL of this is really costly on the client side and I would prefer this to be stored
// in a Summaries table on the server but that isn't the point of this project.

function sortedData(data) {
	let sortedData = data.sort((a, b) => b.date - a.date);
	// Let's say this is now sorted
	// Loop through all the items in this array of objects, grab out all of the unique dates
	// After that,
}
