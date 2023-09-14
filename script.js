// const characters = '/character';
// const locations = '/location';
// const episodes = '/episode';


const charactersContainer = document.querySelector('.chars-container');
const defaultFilters = {
    name: '',
    species: '',
    gender: '',
    status: '',
    page:1
}

async function getCharacters(){
   
    try {
        const response = await api.get(`/character`);

        const characters = response.data.results
        console.log(characters);

        characters.forEach(character => {
            const cardCharacters = document.createElement('div');
            cardCharacters.classList.add('card')
            cardCharacters.innerHTML = `<img
            src="${character.image}"
            alt="perfil"
          />
          <h2>${character.name}</h2>
          <p>${character.status}</p>
          <p>${character.species}</p>`
          charactersContainer.appendChild(cardCharacters)

        })

        
    
    }
    catch (error) {console.log('Erro ao buscar',error);}

    
}


getCharacters()
// getCharacters(defaultFilters)