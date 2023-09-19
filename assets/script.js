const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const slideLeght = slides.length
console.log("slide = " + slideLeght)

let carouselLeft = document.getElementById("carousel_left")
carouselLeft.addEventListener("click", function () {
	console.log("clic on left arrow")
})

let carouselRight = document.getElementById("carousel_right")
carouselRight.addEventListener("click", function () {
	console.log("clic on right arrow")
})

let dotBlock = document.getElementById("dots")

let i = 0
while (i < slideLeght) {
	let dotDiv = document.createElement("div")
	dotDiv.classList.add("dot")
	dotBlock.appendChild(dotDiv)
	console.log(i)
	i++
}