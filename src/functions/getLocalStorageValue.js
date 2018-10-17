export const getLocalStorageValue = (storageKey, storageName) => {
	const data = window.localStorage.getItem('data')

	try {
		const parsedData = JSON.parse(data)
		return parsedData[0][storageKey][storageName]
	}
	catch (error) {
		throw new Error(error)
	}
}
