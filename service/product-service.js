const listaStarWars = async () => {
  try {
    const response = await fetch("http://localhost:53000/StarWars");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const listaConsola = async () => {
  try {
    const response = await fetch("http://localhost:53000/Consolas");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const listaDiversos = async () => {
  try {
    const response = await fetch("http://localhost:53000/Diversos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const crearProduct = async (URL, categoria, name, price, description) => {
  try {
    const response = await fetch(`http://localhost:53000/${categoria}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        URL,
        name,
        price,
        description,
        id: uuid.v4(),
      }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const viewStarWars = async (id) => {
  try {
    const response = await fetch(`http://localhost:53000/StarWars/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error aqui StarWars");
  }
};

const viewConsolas = async (id) => {
  try {
    const response = await fetch(`http://localhost:53000/Consolas/${id}`);
    const data = await response.json();
    return data;
  } catch (erro) {
    console.log("error aqui Consolas");
  }
};

const viewDiversos = async (id) => {
  try {
    const response = await fetch(`http://localhost:53000/Diversos/${id}`);
    const data = await response.json();
    return data;
  } catch (erro) {
    console.log("error aqui Diversos");
  }
};

export const productService = {
  listaStarWars,
  listaConsola,
  listaDiversos,
  crearProduct,
  viewStarWars,
  viewConsolas,
  viewDiversos,
};
