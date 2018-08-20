let card = document.querySelectorAll(".card");

card.forEach( (element) => element.addEventListener("mouseenter", (e) => {

  e.target.classList.add("active");

}) );

card.forEach( (element) => element.addEventListener("mouseleave", (e) => {

  e.target.classList.remove("active");

}) );





