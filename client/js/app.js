// ********************************************
// ANIMES FLOW
// index
function getAllAnimes(){
    fetch('http://localhost:3000/animes')
        .then(r => r.json())
        .then(appendAnimes)
        .catch(console.warn)
};

// create
function submitAnime(e){
    e.preventDefault();

    const animeData = {
        name: e.target.name.value,
        picture: e.target.picture.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(animeData),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch('http://localhost:3000/animes', options)
        .then(r => r.json())
        .then(appendAnime)
        .catch(console.warn)
};

// helpers
function appendAnimes(animes){
    animes.forEach(appendAnime);
};

function appendAnime(animeData){
    const newLi = document.createElement('li');
    newLi.textContent = `Name: ${animeData.name} || Picture: ${animeData.picture}`
    const animesList = document.querySelector('ul');
    animesList.append(newLi);
};

// ********************************************

// MESSAGE FLOW
function getMessage(){
    fetch('http://localhost:3000')
        .then(r => r.text())
        .then(renderMessage)
        .catch(console.warn)
};

function renderMessage(msgText){
    const msg = document.createElement('p');
    msg.textContent = msgText;
    msg.style.color = 'red';
    document.body.append(msg);
};

// ********************************************

module.exports = {
    getAllAnimes,
    submitAnime,
    appendAnimes,
    appendAnime,
    getMessage,
    renderMessage
}