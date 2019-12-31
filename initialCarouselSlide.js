/* causes carousel to autoslide once through the images when page is loaded. (unless buttons are clicked during the slide)
*/

let count=1; 

//carouselSlide is declared in imgCarousel.js as const carouselSlide = document.querySelector(".carousel-slide");
carouselSlide.style.transition = "transform 15s ease-in-out"; //can be added as a CSS class instead

for(count=2; count<6; count++){
console.log(count);
carouselSlide.style.transform = "translateX(" + (-size * count) + "px)"; 
}

carouselSlide.addEventListener("transitionend", function(){
	/*this resets to image 1 after the above for loop
	is implemented, so that (the counter in) imgCarousel.js
	works as expected*/
	if(count == 6){
		carouselSlide.style.transition = "none";
		count = 1;
		console.log(count);
		carouselSlide.style.transform = "translateX(" + (-size * count) + "px)"; 
	}
});