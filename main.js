import "./style.css";
import { products } from "./constants";

const storeElements = document.querySelector('.products');

const setUpStars = (score) => {

  let starContainer = [];
  
  for (let i=0; i<score; i++){ 
    starContainer.push(`<span class="stars">⭐️</span>`);
  }
  return starContainer.join(' '); 
};

const getProductTemplate = (product) => 
  `
    <div class="productElement">
      <div class="image-container">
        <img src="${product.image}" alt="${product.name}"></img>
      </div>
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <div class="stars-container"> ${setUpStars(product.stars)} (${product.reviews})</div>
      <p>Vendido por: <span>${product.seller}</span></p>
    </div>
  `;

const setUpProduct = () => {
  products.forEach((product) => { // Comentario 3: Nombres únicos de variables: product -> p
    const template = getProductTemplate(product);
    storeElements.innerHTML += template;
  });
};

setUpProduct();
