//reference for js carousel: https://www.youtube.com/watch?v=KcdBOoK3Pfw
//reference for cropping images in photoshop to same size: https://www.youtube.com/watch?v=6sLrlHcw0lU
//reference for DOM manipulation: https://github.com/arrested-developer/introducing-dom-manipulation

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImg = document.querySelectorAll(".carousel-slide img"); 
const carouselFig = document.querySelectorAll(".carousel-slide figure"); 
console.log(carouselFig);
console.log(carouselImg);

const leftButton = document.querySelector("#leftButton");
const rightButton = document.querySelector("#rightButton");
//Above defines js objects for DOM elements for manipulating. 

const noOfImages = carouselImg.length-2; //take away 2 since we clone 2 images. 

let size = carouselFig[0].clientWidth;

let counter=1; 
carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 
//Above makes starting point img 1 (instead of image 5 clone appearing before img 1 in html)


//(note addEventListener is not supported on IE8 and below).
window.addEventListener("resize", ()=>{ 
//this event listener allows me to change the browser size and allow the image carousel to behave properly still.
	size = carouselFig[0].clientWidth;
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 
	carouselSlide.style.transition = "none";
});

console.log(counter);

//button listeners
rightButton.addEventListener("click", function(){
	if(counter>=carouselImg.length - 1){
		return;
	} 
	carouselSlide.style.transition = "transform 0.6s ease-in-out"; //can be added as a CSS class instead
	counter++; 
	console.log(counter);
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 
});

leftButton.addEventListener("click", function(){
	if(counter<=0){
		return;
	} 
	carouselSlide.style.transition = "transform 0.6s ease-in-out"; //can be added as a CSS class instead
	counter--;
	console.log(counter);
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 
});

carouselSlide.addEventListener("transitionend", function(){
	if(carouselImg[counter].id === "lastClone"){
		carouselSlide.style.transition = "none";
		counter = noOfImages; 
		carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 
	}
	if(carouselImg[counter].id === "firstClone"){
		carouselSlide.style.transition = "none";
		counter = carouselImg.length - counter; 
		carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 
	}
});

