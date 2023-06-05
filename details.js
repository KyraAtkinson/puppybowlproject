window.onload = () => {
    let puppyName = localStorage.getItem("puppyName");
    let puppyBreed = localStorage.getItem("puppyBreed");
    let puppyStatus = localStorage.getItem("puppyStatus");
    let puppyPic = localStorage.getItem("puppyPic");
  
    let puppyDetailsContainer = document.getElementById(
      "puppy-details-container"
    )
    
    
    let nameDetails = document.createElement("h2")
    nameDetails.innerText = puppyName;

     let breedDetails = document.createElement("p")
    breedDetails.innerText = `Breed: ${puppyBreed}`

      let pupStatusDetails = document.createElement("p")
    pupStatusDetails.innerText = `Status: ${puppyStatus}`

      let pupPicDetails = document.createElement("img");
    pupPicDetails.src = puppyPic
    
   console.log(puppyPic);



    let backButton = document.createElement("button")
    backButton.id = "back-button"
    backButton.innerText = "Back to HomePage"
    backButton.addEventListener("click", () => {
        window.location.href = "index.html";
    })

    puppyDetailsContainer.appendChild(nameDetails)
    puppyDetailsContainer.appendChild(breedDetails)
    puppyDetailsContainer.appendChild(pupStatusDetails)
    puppyDetailsContainer.appendChild(pupPicDetails)
    puppyDetailsContainer.appendChild(backButton)
  };

