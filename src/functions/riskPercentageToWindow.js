// Maikel helped

export const riskAssessmentToWindow = () => {
	// gets all the factors
	const factors = window.localStorage.getItem("factors") || []

	// puts the factors on 0 if they haven't been changed
	if(!factors.length > 0) {
		window.factors = [
			{
				name: "gender",
				factor: 0
			},
			{
				name: "age-k",
				factor: 0
			},
			{
				name: "age-m",
				factor: 0
			},
			{
				name: "age-d",
				factor: 0
			},
			{
				name: "age-difference",
				factor: 0
			},
			{
				name: "origin",
				factor: 0
			},
			{
				name: "track",
				factor: 0
			},
			{
				name: "education-k",
				factor: 0
			},
			{
				name: "level-k",
				factor: 0
			},
			{
				name: "change-k",
				factor: 0
			},
			{
				name: "leave",
				factor: 0
			},
			{
				name: "level-d",
				factor: 0
			},
			{
				name: "level-m",
				factor: 0
			},
			{
				name: "living",
				factor: 0
			},
			{
				name: "household",
				factor: 0
			},
			{
				name: "divorce",
				factor: 0
			},
			{
				name: "victim",
				factor: 0
			},
			{
				name: "participation-d",
				factor: 0
			},
			{
				name: "participation-m",
				factor: 0
			},
			{
				name: "eco-d",
				factor: 0
			},
			{
				name: "eco-m",
				factor: 0
			},
			{
				name: "crime-k",
				factor: 0
			},
			{
				name: "crime-halt",
				factor: 0
			},
			{
				name: "crime-p",
				factor: 0
			},
			{
				name: "rime-d",
				factor: 0
			},
			{
				name: "crime-m",
				factor: 0
			}
		]
		try {
			window.localStorage.setItem("factors", JSON.stringify(window.factors))
		} catch (error) {
			throw new Error (error)
		}
	} else {
		try {
			// write js in json to window
			window.factors = JSON.parse(window.localStorage.getItem("factors"))
		} catch (error) {
			throw new Error (error)
		}
	}
}
