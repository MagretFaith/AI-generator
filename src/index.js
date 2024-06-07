function generateIdeas(event) {
  event.preventDefault();

 
   new Typewriter('#ideas', {
  strings: "Food stand",
  autoStart: true,
  delay: 1,
  cursor: "",
});
}


let poemFormElement = document.querySelector("#ideas-generator-form");
poemFormElement.addEventListener("submit", generateIdeas);