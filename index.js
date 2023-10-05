document.addEventListener("DOMContentLoaded", function (e) {
    //console.log(e.target);
    fetch ("http://localhost:3000/characters")
     .then(response => response.json())
     .then((data) =>{
     console.log(data);
     displayCharacters (data)

     })
})

function displayCharacters(animalData){
    console.log(animalData);
    const characterBar=document.querySelector("#character-bar")
    animalData.forEach(element => {
      const span =document.createElement("span")  
      span.innerHTML= element.name
      characterBar.appendChild(span)

      span.addEventListener("click",(e)=>{
        handleSpanclick(e,element)
      })

        
    });
}
function handleSpanclick(e,element){
    console.log(e.target);
    const name = document.querySelector("#name")
    const image = document.querySelector("#image")
    const voteCount = document.querySelector("#vote-count")
    name.innerHTML = element.name
    image.src = element.image
   voteCount.innerHTML = element.votes
   
   const votesForm = document.querySelector("#votes-form")
   votesForm.addEventListener("submit",(e)=>{
    handleSubmission(e, voteCount)
   ntainer.appendChild(resetButton);
  })
}
function handleSubmission(e, voteCount){
    e.preventDefault()
  const inputValue = document.querySelector("#votes").value
  voteCount.innerHTML = inputValue
}


function resetVotes(){

}
document.addEventListener("DOMContentLoaded", fetchdata);