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
console.log(size);
/*need to create a dynamic size variable which changes if the viewport size changes using addEventListener? i.e. to recalculate size if viewport size is adjusted/or refresh page*/
/*need to find a way to adjust the image size to fit the and be centered in the container*/

let counter=1; 
carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 
//Above makes starting point img 1 (instead of image 5 clone appearing before img 1 in html)

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

