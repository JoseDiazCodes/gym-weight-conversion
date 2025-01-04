const inputField = document.getElementById("unit-om")
const convertBtn = document.getElementById("convert-btn")

function createConversionFragment(value, fromUnit, toUnit, rate) {
	const fragment = document.createDocumentFragment()
	const p = document.createElement("p")

	p.textContent = `${value} ${fromUnit} = ${(value * rate).toFixed(
		3
	)} | ${value} ${toUnit} = ${(value / rate).toFixed(3)}`

	fragment.appendChild(p)
	return fragment
}

convertBtn.addEventListener("click", () => {
	const inputValue = Number(inputField.value)

	const lengthFragment = createConversionFragment(
		inputValue,
		"meters",
		"feet",
		3.281
	)
	const volumeFragment = createConversionFragment(
		inputValue,
		"liters",
		"gallons",
		0.264
	)
	const massFragment = createConversionFragment(
		inputValue,
		"kilos",
		"pounds",
		2.204
	)

	// clear the input field
	inputField.value = ""

	const fragments = [lengthFragment, volumeFragment, massFragment]

	const containers = document.querySelectorAll(
		".length-container, .volume-container, .mass-container"
	)

	containers.forEach((elm, index) => {
		const existingParagrah = elm.querySelector("p")
		if (existingParagrah) {
			existingParagrah.remove()
		}
		elm.appendChild(fragments[index])
	})
})

// conversions!
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
