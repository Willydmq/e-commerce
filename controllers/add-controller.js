import { productService } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const URL = document.querySelector("[data-url]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const name = document.querySelector("[data-nombre]").value;
  const price = Number(document.querySelector("[data-precio]").value);
  const description = document.querySelector("[data-descripcion]").value;

  try {
    await productService.crearProduct(URL, categoria, name, price, description);
    document.querySelector("[data-url]").value = "";
    document.querySelector("[data-categoria]").value = "";
    document.querySelector("[data-nombre]").value = "";
    document.querySelector("[data-precio]").value = "";
    document.querySelector("[data-descripcion]").value = "";
    window.location.href = "../registro-completo.html";
  } catch (error) {
    alert("Ocurrio un error CrearProducto");
  }
});
