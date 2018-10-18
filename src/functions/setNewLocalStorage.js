// Maikel helped

// you have to export to be able to import it somewhere else
// but not with components

export const setNewLocalStorage = (inputName, selectedValue, keyValue) => {
	// the data from index.js
	const data = window.localStorage.getItem("data") || [];
	try {
		// parse data to JSON
		const parsedData = JSON.parse(data);
		// set default data
		// vraag dit
		parsedData[0][keyValue][inputName] = selectedValue;
		//  set item in local4Storage
		window.localStorage.setItem("data", JSON.stringify(parsedData));
	}
	catch (error) {
		throw new Error(error);
	}
}
