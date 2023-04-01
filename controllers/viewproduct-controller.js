import { productService } from "../service/product-service.js";
import { productController } from "./product-controller.js";

const createProductView = async (product) => {
  const view = document.querySelector("[data-view]");

  const titulo = document.createElement("h2");
  titulo.classList.add("part1-2__descripcion-titulo");
  titulo.textContent = "Productos Similares";
  view.appendChild(titulo);

  const anexo = document.createElement("div");
  anexo.classList.add("part2-2__anexo");
  anexo.setAttribute(product, "");
  view.appendChild(anexo);
};

const createProductPrueba = async (product) => {
  const view = document.querySelector("[data-view]");
  const contenido = `
  <h2 class='part1-2__descripcion-titulo'>Productos Similares</h2>
  <div class='part2-2__anexo'></div>
  `;
  view.innerHTML = contenido;
  view.querySelector(".part2-2__anexo").setAttribute(product, "");
};

const obtenerInfo = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const link = document.querySelector("[data-url]");
  const name = document.querySelector("[data-name]");
  const price = document.querySelector("[data-price]");
  const description = document.querySelector("[data-decripcion]");

  try {
    const [StarWars, Consolas, Diversos] = await Promise.all([
      productService.viewStarWars(id),
      productService.viewConsolas(id),
      productService.viewDiversos(id),
    ]);
    // console.log(StarWars, Consolas, Diversos);

    if (
      StarWars.URL &&
      StarWars.name &&
      StarWars.price &&
      StarWars.description
    ) {
      link.style.backgroundImage = `url(${StarWars.URL})`;
      name.textContent = StarWars.name;
      price.textContent = "$" + parseFloat(StarWars.price);
      description.textContent = StarWars.description;
      await createProductPrueba("starwars");
      await productController.displayStarWarsProducts();
    } else if (
      Consolas.URL &&
      Consolas.name &&
      Consolas.price &&
      Consolas.description
    ) {
      link.style.backgroundImage = `url(${Consolas.URL})`;
      name.textContent = Consolas.name;
      price.textContent = "$" + parseFloat(Consolas.price);
      description.textContent = Consolas.description;
      await createProductPrueba("consola");
      await productController.displayConsolasProducts();
    } else if (
      Diversos.URL &&
      Diversos.name &&
      Diversos.price &&
      Diversos.description
    ) {
      link.style.backgroundImage = `url(${Diversos.URL})`;
      name.textContent = Diversos.name;
      price.textContent = "$" + parseFloat(Diversos.price);
      description.textContent = Diversos.description;
      await createProductPrueba("diversos");
      await productController.displayDiversosProducts();
    } else {
      throw new Error();
    }
  } catch (error) {
    window.location.href = "/error.html";
  }
};

obtenerInfo();
