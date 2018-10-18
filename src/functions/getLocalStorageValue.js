// Maikel helped
// every page has 1 storage key with all the storage names in it
export const getLocalStorageValue = (storageKey, storageName) => {
	// gets all the data from the localstorage
	const data = window.localStorage.getItem('data')

	try { // put the data in JSON in parsedData
		const parsedData = JSON.parse(data)
		// gets the storageKey and storagename of the user (page and selectname)
		return parsedData[0][storageKey][storageName]
	}
	catch (error) {
		throw new Error(error)
	}
}
