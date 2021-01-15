//On stocke le nom des images dans un tableau
const img = [
  `contBcg-0.jpeg`,
  `contBcg-1.jpeg`,
  `contBcg-2.jpeg`,
  `contBcg-3.jpeg`,
  `contBcg-4.jpeg`,
]
// On itinialise un compteur 
let imgNum = 0

//Je récupère l'élément à modiifier
const imgContainerElement = document.getElementById(`img-container`)

//je récupère et pose un écouteur sur le bouton droit, au clic incrémente le compteur et change d'image en fonction. 
//Si le compteur est supérieur à la taille du tableau -1 alors on retourne au début du tableau
const rightBtn = document.getElementById(`btn-right`).addEventListener(`click`, (event) => {
  
  imgNum++
  if (imgNum > img.length - 1) {
    imgNum = 0
  }

  imgContainerElement.style.backgroundImage = `url(./img/${img[imgNum]})`;
})
//Même logique que bouton droit dans l'autre sens
const leftBtn = document.getElementById(`btn-left`).addEventListener(`click`, (event) => {
  if (imgNum === 0) {
    imgNum = img.length 
  }
   imgNum --
  imgContainerElement.style.backgroundImage = `url(./img/${img[imgNum]})`;
})
