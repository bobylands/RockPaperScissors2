// yo, petit cheat sheet pour les methodes d'array
//Une array c'est juste une liste de trucs, genre des nombres ou des mots ou meme d'autres arrays(La on tombe en 3D garde ca pour apres ben des cafes)
const numbers = [2, 5, 8, 3, 10];

// forEach — loop chaque element, comme un for loop mais plus clean
//P.S quand tu vois n penses que c'est l'equivalent a numbers[i] dans un for loop classique
numbers.forEach((n) => {
  console.log(n);
});

// map — pareil que forEach mais ca te retourne un NOUVEAU array
const doubles = numbers.map((n) => {
  return n * 2;
});
console.log(doubles); // [4, 10, 16, 6, 20]

// filter — garde juste ceux qui passent ta condition
const higherThan4 = numbers.filter((n) => {
  return n > 4;
});
console.log(higherThan4); // [5, 8, 10]

// find — comme filter mais ca retourne juste le PREMIER match
const firstNumHigherThan4 = numbers.find((n) => {
  return n > 4;
});
console.log(firstNumHigherThan4); // 5

// reduce — le plus weird au debut mais en gros ca accumule tout en une 
// seule valeur pense a ca comme: tu pars de 0, pis a chaque tour tu add 
// le nombre au total mais tu pourrais aussi faire autre chose, 
// genre multiplier ou garder une liste de tous les numbers pairs

const total = numbers.reduce((total, n) => {
  return total + n;
}, 0);
console.log(total); // 28

// run ca avec: node example_array.js
