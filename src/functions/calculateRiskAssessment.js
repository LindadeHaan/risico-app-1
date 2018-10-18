export const calculateRiskAssessment = (values) => {
		// if you don't have values
		if(!values) {
			return null
		}

		// all values
	const totalValue = values

		// looping over the object and getting the factor
		.map(obj => obj.factor)
		// 0 is start values
		// calculator is wat je er bij optelt
		.reduce((calculator, currentValue) => calculator + currentValue, 0)

	// the formula
	return Number((1 / (1 + Math.exp(-1 * (-8.57219 + totalValue))) * 100).toFixed(2))

}
