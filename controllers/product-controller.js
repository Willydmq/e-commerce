import { productService } from "../service/product-service.js";

// Función para mezclar los elementos de un array
const shuffleArray = async (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const crearProducts = async (URL, name, price, id) => {
  const linea = document.createElement("div");
  linea.classList.add("part2-2__productos");
  linea.setAttribute("data-productId", "");
  const contenido = `
  <div class="part2-2__productos-img sw1" style = "background-image: url(${URL})"></div>
  <div class="part2-2__productos-descripcion">
    <h3 class="productos-descripcion__titulo">${name}</h3>
    <p class="productos-descripcion__precio">$${price}</p>
  </div>
  <div class="part2-2__productos-enlace">
    <ul class="productos-enlace-ul">
      <li class="enlace-ul__li link">
        <a href="/viewproduct.html?id=${id}" class="ul__li link"
          >Ver Producto</a
        >
      </li>
    </ul>
  </div>
  `;
  linea.innerHTML = contenido;
  return linea;
};

/* Obtener los datos del servidor. Para Productos StarWars */
const displayStarWarsProducts = async () => {
  const starwars = document.querySelector("[starwars]");

  if (starwars) {
    try {
      const data = await productService.listaStarWars();
      // Mezclar los productos aleatoriamente
      const dataAleatoria = await shuffleArray(data);
      dataAleatoria.forEach(async ({ URL, name, price, id }) => {
        const nuevoProducto = await crearProducts(URL, name, price, id);
        starwars.appendChild(nuevoProducto);
      });
      // console.log(data);
    } catch (error) {
      alert("Ocurrio un error StarWars");
    }
  }
};
displayStarWarsProducts();

/* Obtener los datos del servidor. Para Productos Consola */
const displayConsolasProducts = async () => {
  const consola = document.querySelector("[consola]");

  if (consola) {
    try {
      const data = await productService.listaConsola();
      // Mezclar los productos aleatoriamente
      const dataAleatoria = await shuffleArray(data);
      dataAleatoria.forEach(async ({ URL, name, price, id }) => {
        const nuevoProducto = await crearProducts(URL, name, price, id);
        consola.appendChild(nuevoProducto);
      });
    } catch (error) {
      alert("Ocurrio un error Consolas");
    }
  }
};
displayConsolasProducts();

/* Obtener los datos del servidor. Para Productos Diversos */

const displayDiversosProducts = async () => {
  const diversos = document.querySelector("[diversos]");

  if (diversos) {
    try {
      const data = await productService.listaDiversos();
      // Mezclar los productos aleatoriamente
      const dataAleatoria = await shuffleArray(data);
      dataAleatoria.forEach(async ({ URL, name, price, id }) => {
        const nuevoProducto = await crearProducts(URL, name, price, id);
        diversos.appendChild(nuevoProducto);
      });
    } catch (error) {
      alert("Ocurrio un error Diversos");
    }
  }
};
displayDiversosProducts();

export const productController = {
  displayStarWarsProducts,
  displayConsolasProducts,
  displayDiversosProducts,
};
