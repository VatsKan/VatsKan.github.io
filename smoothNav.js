/* code reference: https://css-tricks.com/sticky-smooth-active-nav/ */

let navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    let target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

/* look up target.scrollIntoView(block: "start") online and adjust
so that it doesn't cover headings 
i.e. tale away 
header.clientHeight */ 