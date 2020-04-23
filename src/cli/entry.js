function  setTime(date, minutes) {
	return new Date(date.getTime() + minutes * 60000)
}
async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
async function startActivity() {
	console.log(Date.now())
	// # base case
	if (Date.now() > stopActivityTime) {
		console.log("Finished activity!");
		return;
	}

	try {
		await sleep(61000);
		await startActivity();
	} catch (e) {
		if (e) {
			console.log(e);
		}
	}
}

let stopActivityTime = setTime(new Date(), 1);
startActivity().then(function () {
	console.log('done')
});
