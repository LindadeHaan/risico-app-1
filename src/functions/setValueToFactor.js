// Maikel helped
export const setValueToFactor = (inputName, factor) => {
	// all factors in the const or an empty object
	const factors = window.factors || []
	const factorByName = factors[factors.findIndex(factor => factor.name === inputName)]
	console.log(factorByName)
	// set value to factor
	factorByName.factor = factor
}
