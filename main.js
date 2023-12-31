import "./style.css";
import { products } from "./constants";

const storeElements = document.querySelector('.products');
let filtredProducts = products.slice();

const filterProducts = () => {
  const sellerFilter = document.querySelector('.filter');
  const seller = sellerFilter.value;
  const maxPriceInput = document.querySelector('.price-filter');
  const maxPrice = maxPriceInput.value;

  if (maxPrice === "") {
    filtredProducts = products.filter((product) => product.seller === seller);
  } else if (seller === " ") {
    filtredProducts = products.filter((product) => product.price <= maxPrice);
  } else {
    filtredProducts = products.filter((product) => product.seller === seller && product.price <= maxPrice);
  };

  storeElements.innerHTML = '';
  setUpProduct(filtredProducts);
}

// const onOptionSelected = (event) => {
  // const selectedSeller = event.target.value;
  // const maxPriceInput = document.querySelector('.price-filter');
  // const selectedMaxPrice = maxPriceInput.value;

  // filterProducts();

  // if (selectedMaxPrice === ""){
  //   filtredProducts = products.filter((product) => product.seller === selectedSeller);
  // }else {
  //   filtredProducts = products.filter((product) => product.seller === selectedSeller && product.price <= selectedMaxPrice);
  // };


  // storeElements.innerHTML = '';
  // setUpProduct(filtredProducts);
  // };

// const onClick = (event) => {
  // const sellerFilter = document.querySelector('.filter');
  // const selectedSeller = sellerFilter.value;
  // const maxPriceInput = document.querySelector('.price-filter');
  // const selectedMaxPrice = maxPriceInput.value;

  // filterProducts()

  // if(selectedSeller===" "){
  //   filtredProducts = products.filter((product) => product.price <= selectedMaxPrice);
  // }else{
  //   filtredProducts = products.filter((product) => product.seller === selectedSeller && product.price <= selectedMaxPrice);
  // };


  // storeElements.innerHTML = '';
  // setUpProduct(filtredProducts);
// };

const onClickReset = (event) => {
  setUpProduct(products);
  filtredProducts = products;
  const priceFilter=document.querySelector('.price-filter');
  priceFilter.value= " ";
  const sellerFilter = document.querySelector('.filter');
  sellerFilter.selectedIndex = 0;
};

const principalContainer = document.querySelector('#app');
const headerElement = document.createElement('header');
principalContainer.insertAdjacentElement("beforebegin",headerElement);
headerElement.innerHTML = `
  <div class = "navBar">
    <div>
      <button id="menu"> Ⲷ </button>
      <nav>
        <a href="#">
         <img src="https://cdn.pccomponentes.com/img/logos/logo-pccomponentes.svg" class="logo" alt="Logo">
        </a>
     </nav>
    </div>

    <nav>
      <a href="#"><i class="fas fa-sign-in-alt color-icono"></i></a>
    </nav>
  </div>
`;

const searchElement = document.querySelector('.filters')
const sellerSearcherDiv = document.createElement('div');
const sellerSearcher = document.createElement('select');
sellerSearcher.className='filter';
const sellerLabel = document.createElement('label');
sellerLabel.textContent = 'Vendedor: ';
sellerSearcher.innerHTML = `
  <option value=" "></option>;
  <option value="PcComponentes">PcComponentes</option>;
  <option value="Edden Technology">Edden Technology</option>;
  <option value="Infopavon">Infopavon</option>;
  <option value="Locura informática">Locura informática</option>;
`;
searchElement.appendChild(sellerSearcherDiv);
sellerSearcherDiv.appendChild(sellerLabel);
sellerSearcherDiv.appendChild(sellerSearcher);


sellerSearcher.addEventListener('change',filterProducts);

const priceFilterDiv = document.createElement('div');
priceFilterDiv.className='filter-container';
priceFilterDiv.innerHTML = `
  <label for="price-filter">Precio máx:</label>
  <input type="number" name="price-filter" class="price-filter">
  <button class="searcher-button">🔍</button>
`;
searchElement.appendChild(priceFilterDiv);
const button  = document.querySelector('.searcher-button');
button.addEventListener('click',filterProducts);

const cleanFiltersButton = document.createElement('button');
cleanFiltersButton.textContent='Limpiar Filtros';
cleanFiltersButton.className='clean';
searchElement.appendChild(cleanFiltersButton);
const resetSearchButton = document.querySelector('.clean');
resetSearchButton.addEventListener('click', onClickReset);


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
      <p>${product.price} <span>€</span></p>
      <div class="stars-container"> ${setUpStars(product.stars)} (${product.reviews})</div>
      <p>Vendido por: <span>${product.seller}</span></p>
    </div>
  `;

const setUpProduct = (productsArray) => {
  productsArray.forEach((product) => {
    const template = getProductTemplate(product);
    storeElements.innerHTML += template;
  });
};

setUpProduct(products);

const footerContainer = document.createElement('footer');
footerContainer.className = 'footer';
footerContainer.innerHTML = `
  <p> PC Componentes y Multimedia SLU CIF B73347494. AVDA Europa, Parcela 2-5 y 2-6. Polígono industrial Las Salinas, 30840, Alhama de Murcia, Murcia. ESPAÑA.<p>
`;
principalContainer.insertAdjacentElement("afterend",footerContainer);