const images =["0.jpg","1.jpg","2.jpg","3.jpg"];
const chosenImage =images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src =`img/${chosenImage}`;
bgImage.classList.add("background");

document.body.appendChild(bgImage); //appendChild() method adds a node to the end of the list of children of a specified parent node.
//document.body.prepend(bgImage); //prepend() method adds a node to the beginning of the list of children of a specified parent node.     

