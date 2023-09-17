import "./style.css";
// Comentario 1: Nombre de array de productS: product -> products
import { products } from "./constants";

const storeElements = document.querySelector('.products');

// Comentario 2: Si función con llave, entonces usar "return", sino sacar llaves
const getProductTemplate = (product) => 
  `
    <div class="product">
      <div class="image-container">
        <img src="${products.image}" alt="${products.name}"></img>
      </div>
      <h3>${products.name}</h3>
      <p>${products.price}</p>
      <span>${products.stars}</span>
      <p>${products.seller}</p>
    </div>
  `;

const setUpProduct = () => {
  products.forEach((product) => { // Comentario 3: Nombres únicos de variables: product -> p
    const template = getProductTemplate(product);
    storeElements.innerHTML += template;
  });
};

setUpProduct();
