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


let currentSlide = 0
const slideLeght = slides.length
const bannerImg = document.getElementById("banner_img")
const bannerTxt = document.getElementById("banner_txt")

//adding dot to the bottom of the carousel
const dotBlock = document.getElementById("dots")
for (let i = 0; i < slideLeght; i++) {
	const dotDiv = document.createElement("div")
	dotDiv.classList.add("dot")
	dotBlock.appendChild(dotDiv)
}

const dotList = document.querySelectorAll(".dot")
let dotSelected = dotList[currentSlide]
dotSelected.classList.add("dot_selected")


//event listeners for clic on arrows
const carouselLeft = document.getElementById("carousel_left")
carouselLeft.addEventListener("click", function () {
	dotSelected.classList.remove("dot_selected")
	if (currentSlide === 0) {
		currentSlide = slideLeght - 1
	}
	else {
		currentSlide--
	}
	bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image
	bannerTxt.innerHTML = slides[currentSlide].tagLine
	dotSelected = dotList[currentSlide]
	dotSelected.classList.add("dot_selected")
})

const carouselRight = document.getElementById("carousel_right")
carouselRight.addEventListener("click", function () {
	dotSelected.classList.remove("dot_selected")
	if (currentSlide === slideLeght - 1) {
		currentSlide = 0
	}
	else {
		currentSlide++
	}
	bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image
	bannerTxt.innerHTML = slides[currentSlide].tagLine
	dotSelected = dotList[currentSlide]
	dotSelected.classList.add("dot_selected")
})