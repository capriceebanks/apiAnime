// ********************************************
// SETUP
const btn = document.querySelector('button');
const form = document.querySelector('#new-anime-form');

// Bind event listeners
btn.addEventListener('click', getMessage);
form.addEventListener('submit', submitCat);

// Fetch all animes as soon as app is loaded
getAllAnimes();
// ********************************************