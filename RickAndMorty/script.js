const searchInput = document.querySelector("#char-input");
const searchBtn = document.querySelector(".btn-search");
const charContainer = document.querySelector(".char-container");

const charCount = 826;

const character = async () => {
  for (let i = 1; i <= charCount; i++) {
    await getCharacter(i);
  }
};

const getCharacter = async (id) => {
  let url = `https://rickandmortyapi.com/api/character/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  createCharacter(data);
};

const createCharacter = (character) => {
  const id = character.id;
  const name = character.name;
  const status = character.status;
  const gender = character.gender;
  const location = character.origin.name;
  const species = character.species;

  const charElement = document.createElement("div");
  charElement.classList.add("char-box");

  charElement.innerHTML = `
<img src="https://rickandmortyapi.com/api/character/avatar/${id}.jpeg" alt="" />
        <h3 class="char-name">${name}</h3>
        <span>Status: </span><span class="char-status">${status}</span><br>
        <span>Species: </span><span class="char-species">${species}</span><br>
        <span>Gender: </span><span class="char-gender">${gender}</span><br>
        <span>Location: </span><span class="char-location">${location}</span>`;
  charContainer.appendChild(charElement);
};

character();
