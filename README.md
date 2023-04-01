
# Nombre del Proyecto 📋

"The Force Store: Compra productos relacionados con Star Wars, consolas y tecnología en una plataforma moderna y segura". 😀

<div style="text-align: center; padding: 10px;">
    <img src="./img/The%20Force%20Store.png" width="">
</div>

# Link Proyecto

<div style="display: flex; flex-direction: column; align-items: center;">
    <img src="./img/alurageek.svg" width="">
    <a style="color: blue; font-size: 20px; display: block; text-align: center;" href="https://willydmq.github.io/e-commerce/" target="_blank">The Force Store</a>
</div>

## Instalación ⚙️

1. Asegúrese de tener instalado Node.js en su computadora. Si no lo tiene instalado, puede descargar e instalar Node.js en el sitio web oficial de Node.js.

2. Cree una carpeta en su computadora donde desee guardar el proyecto.

3. Abra una terminal o línea de comandos y navegue hasta la carpeta donde ha decidido guardar su proyecto.

4. Ahora, ejecute este comando en la línea de comandos: 
   ```
   npm init -y
   ``` 
   Este comando creará un archivo package.json en la carpeta de su proyecto. Este archivo contendrá información sobre su proyecto y las dependencias que se instalarán.

5. A continuación, ejecute los siguientes comandos en la línea de comandos:
   ```
   npm install --save-dev json-server 
   npm install --save-dev uuid
   ```
   Estos comandos instalarán las librerías json-server y uuid.

6. Descargue los archivos de HTML, CSS y JavaScript del proyecto que tiene abiertos en su computadora y colóquelos en la carpeta de su proyecto.

7. Luego, cree un archivo llamado db.json en la misma carpeta y agréguele el siguiente contenido:
   ```
   {
    "StarWars": [
    {
      "URL": "",
      "name": "",
      "price": ,
      "description": "",
      "id": 
    },
   ```
   Este archivo será utilizado por json-server para simular una base de datos.

8. Para iniciar el servidor de json-server, ejecute el siguiente comando en la línea de comandos:
   ```
   json-server --watch --port 53000 db.json
   ```
9. Finalmente, abra el archivo HTML en su navegador y ¡ya debería poder ver su proyecto!

### Requisitos 📄

Cualquier persona con conocimientos básicos en HTML, CSS y JavaScript y experiencia trabajando en la línea de comandos debería poder abrir y modificar el proyecto sin problemas. 

## Uso 💪

Este proyecto tiene como finalidad mostrar una tienda en línea que vende productos relacionados con Star Wars, Consolas y Diversos. El objetivo principal del proyecto es proporcionar una interfaz de usuario intuitiva y fácil de usar para que los usuarios puedan navegar por los productos de la tienda, ver detalles sobre ellos y comprarlos. Además, se busca mostrar la capacidad de la tecnología web moderna, utilizando las últimas prácticas de desarrollo de frontend y backend. 

## Construido con 🛠️

<div style="text-align: center; padding: 10px;">
    <img src="./img/html.png" width="100px">
    <img src="./img/css.png" width="100px">
    <img src="./img/javascript.png" width="100px">
</div>

## Deployment 🚀

En cuanto a la estructura del proyecto, se puede apreciar que se está utilizando una arquitectura de cliente-servidor, en donde el servidor se encarga de proveer los datos de los productos y el cliente (navegador web) se encarga de visualizarlos. La parte de frontend se utiliza Html y CSS mientras que el backend está escrita en JavaScript.

## Autores ✒️

- **William Maldonado** - _Edición #4: Challenge ONE Front-end. / Desarrollo_ - [Willydmq](https://github.com/Willydmq)

## Expresiones de Gratitud

- Quisiera expresar mi profunda gratitud por todo el esfuerzo y dedicación que han puesto en este gran desafío. El Challenge ha sido una experiencia verdaderamente enriquecedora en mi carrera como programador. 🤓.
- Gracias al compromiso y dedicación de **Aluta Latam y Oracle ONE**, así como a las enseñanzas de los tutores, he logrado cumplir con éxito con este desafío, y espero seguir aprendiendo y creciendo en el ámbito de la programación en el futuro. 📢.
- Quiero destacar la calidad y eficacia de las tecnologías utilizadas en el Challenge, desde Html, CSS hasta el marco Javascript. Gracias a esta selección cuidadosa de herramientas y tecnologías, hemos creado una aplicación web innovadora y de alto rendimiento. 🌟.

---

⌨️ con ❤️ por [William Maldonado](https://github.com/Willydmq) 😊

---

