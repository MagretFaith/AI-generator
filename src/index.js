function displayIdeas(response){
  new Typewriter('#ideas', {
  strings:response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}




function generateIdeas(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
 //Build the API URL
 let apiKey ="591dfc113fcff38f5348ob154ba487t0";
 let prompt = ` User instrctions:Generate a business ideas in the $(instructionsInput.value) and separate each idea with a <br/>`;
 let context = "You are a professional business ideas generator and love to come up with new creative ideas for one to invest in. Your mission is to generate atleast six business ideas in each category and approximate how much it will require to start each idea. Make sure to follow these user instructions.";

 let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
 // Make a call to  the API
 axios.get(apiUrl).then(displayIdeas);
 // Display the generated ideas
}


let ideasFormElement = document.querySelector("#ideas-generator-form");
ideasFormElement.addEventListener("submit", generateIdeas);