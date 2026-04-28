// un event c'est juste "il s'est passe quelque chose" — un click, une touche, etc.
// toi tu dis au navigateur: "quand ca arrive, run cette fonction"

// suppose un <button id="play"> dans le HTML
const bouton = document.getElementById('play');

// addEventListener — ecoute un event, pis run la fonction quand ca arrive
bouton.addEventListener('click', () => {
  console.log('clicked!');
});

// la fonction recoit un objet "e" avec les infos de l event
bouton.addEventListener('click', (e) => {
  console.log(e.target); // l element qui a ete clique
});

// les events communs: 'click', 'input', 'keydown', 'submit', 'change'

// gros concept: avec les events ton code attend que l user fasse de quoi pis reagit.
// tu programmes pu une sequence, tu programmes des reactions.
