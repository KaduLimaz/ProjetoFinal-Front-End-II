const charactersContainer = document.querySelector(".chars-container");
const searchCharacterByName = document.getElementById("searchCharacter");
// const pagination = document.getElementById("pagination");
const btnNext = document.querySelector(".btn-rickNext");
const btnPrev = document.querySelector(".btn-rickPrev");
const searchCharacters = document.getElementById("searchCharacter");
let currentPage = 1;


async function getCharacters(page, name = "") {
  try {
    const params = { page, name };
    const response = await api.get(`/character`, { params });

    const characters = response.data.results;
    const infos = response.data.info;
    
    charactersRickMorty(characters);
    displayPaginationNext(infos);

    console.log(infos);
  } catch (error) {
    console.log("Erro ao buscar", error);
  }
}

function charactersRickMorty(characters) {
  charactersContainer.innerHTML = "";
  characters.forEach((character) => {
    const cardCharacters = document.createElement("div");
    cardCharacters.classList.add("card");
    cardCharacters.innerHTML = `<img
            src="${character.image}"
            alt="perfil"
          />
          <h2>${character.name}</h2>
          <p>${character.status}</p>
          <p>${character.species}</p>`;
    charactersContainer.appendChild(cardCharacters);
  });
}

  

  
 function displayPaginationNext(info) {
     btnPrev.addEventListener("click",  async () => {
    if (currentPage >= 2) {
      currentPage-=1;
      
      await getCharacters(currentPage);
    }
  });

   btnNext.addEventListener("click",  async () => {
    if (currentPage < info.pages) {
      currentPage+= 1;
      
      await getCharacters(currentPage);
    }
  });
}

searchCharacters.addEventListener("input", () => {
  currentPage = 1;
  getCharacters(currentPage, searchCharacters.value);
});

getCharacters();
