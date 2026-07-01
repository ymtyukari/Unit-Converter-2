//generate all conversions when the user clicks convert
//round the numbers fown to three decimal places toFixed(3)

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//make 6 functions containes meter to feet, feet to meter
//show the result with template string in the innertextline <p>s

//whatever I pass in the input, it should show result

const convertBtn = document.getElementById("convert-btn")
const inputNum = document.getElementById("input-num")
const lengthOne = document.getElementById("length1")
const volumeTwo = document.getElementById("volume2")
const massThree = document.getElementById("mass3")

convertBtn.addEventListener("click", function() {
    console.log("button clicked!")
    const num = Number(inputNum.value)
    lengthOne.textContent = `${num} meters = ${convertMetersToFeet(num).toFixed(3)} feet | ${num} feet = ${convertMetersToFeet(num).toFixed(3)} meters`
    volumeTwo.textContent = `${num} liters = ${covertGallonToLitter(num).toFixed(3)} gallons | ${num} gallons = ${covertLiterToGallon(num).toFixed(3)} liters`
    massThree.textContent = `${num} kilos = ${convertPoundToKilogram(num).toFixed(3)} pounds | ${num} pounds = ${convertKilogramToPound(num).toFixed(3)} kilos`
})

//20 meters = 65.616 feet | 20 feet = 6.096 meters
function convertFeetToMeters(num) {
    return num / 3.281
}

function convertMetersToFeet(num) {
    return num * 3.281
}

//20 liters = 5.284 gallons| 20 gallons = 75.708 liters
function covertGallonToLitter(num) {
    return num / 0.264
}

function covertLiterToGallon(num) {
    return num * 0.264
}

//20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
function convertPoundToKilogram(num) {
    return num / 2.204
}

function convertKilogramToPound(num) {
    return num * 2.204
}