const divAtletas = document.querySelector('.atletas');
const btnVerAtletas = document.getElementById('btn_ver_atletas');

const showAthletes = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    data.forEach(el => {
        const divRow = document.createElement('div');
        divRow.classList.add('row');
        
        const divId = document.createElement('div');
        divId.classList.add('id');
        divId.textContent = el.id;
        divRow.appendChild(divId);

        const divName = document.createElement('div');
        divName.classList.add('name');
        divName.textContent = el.name;
        divRow.appendChild(divName);

        const divTeam = document.createElement('div');
        divTeam.classList.add('team');
        divTeam.textContent = el.team;
        divRow.appendChild(divTeam);

        divAtletas.appendChild(divRow);
    })
} 

btnVerAtletas.addEventListener('click', () => {
    const endpoint = 'http://localhost:3335/riders';

    showAthletes(endpoint);
})