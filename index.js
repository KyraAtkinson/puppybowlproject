let cohortName = "2304-FTB-ET-WEB-FT";
let APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;


const fetchAllPuppy = async () => {
    try { 
        let response = await fetch(`${APIURL}/players`)
        let translatedData = await response.json()
        let playerData = translatedData.data
        return playerData.players


    } catch (error) {
        console.error(error)
    }
}

async function renderAllPuppy() {

      let playContainer = document.getElementById("all-players-container")

    let puppyCardsArray = await fetchAllPuppy();
        for (let i = 0; i < puppyCardsArray.length; i++) {
        let currentPup = puppyCardsArray[i];
        
        let puppyCardContainer = document.createElement("div");
        puppyCardContainer.classList = "puppy-card";
    
        let puppyName = document.createElement("h2");
        let newPupBreed = document.createElement("p");
        puppyName.innerText = currentPup.name;
        newPupBreed.innerText = currentPup.breed;

        let newPupDet = document.createElement("button")
        newPupDet.id = "details-button"
        newPupDet.innerText = "Puppy Details"
        newPupDet.addEventListener("click", () => {
          localStorage.setItem("puppyName", currentPup.name);
          localStorage.setItem("puppyBreed", currentPup.breed);
          localStorage.setItem("puppyStatus", currentPup.status);
          localStorage.setItem("puppyPic", currentPup.imageUrl);
    
          window.location.href = "details.html";
        });

        puppyCardContainer.appendChild(puppyName);
        puppyCardContainer.appendChild(newPupBreed);
        puppyCardContainer.appendChild(newPupDet);
        playContainer.appendChild(puppyCardContainer);
      }
    }
    
    renderAllPuppy()
    