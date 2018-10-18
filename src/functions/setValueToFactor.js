export const setValueToFactor = (inputName, factor) => {

	const factors = window.factors || []
	const factorByName = factors[factors.findIndex(factor => factor.name === inputName)]
	console.log(factorByName)
	// set value to factor
	factorByName.factor = factor
}
