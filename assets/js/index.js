import { Animales, Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.js";

let animalesArray = []; // Inicializar la variable como un array vacío

const obtenerAnimales = async () => {
  try {
    const response = await fetch("animales.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const cargarAnimales = async () => {
  document.addEventListener("DOMContentLoaded", async () => {
    const selectAnimal = document.getElementById("animal");
    const btnRegistrar = document.getElementById("btnRegistrar");
    const contenedorAnimales = document.getElementById("Animales");
    const data = await obtenerAnimales();

    selectAnimal.addEventListener("change", (event) => {
      const animalSeleccionado = event.target.value;
      const animalElegido = data.animales.find(
        (animal) => animal.name === animalSeleccionado
      );
      if (animalElegido) {
        mostrarImagen(animalElegido.imagen);

        // Obtener el sonido del animal elegido
        const sonidoAnimal = animalElegido.sonido;
      } else {
        console.error("Animal no encontrado");
      }
    });

    btnRegistrar.addEventListener("click", () => {
      const nombre = document.getElementById("animal").value;
      const animal = animalesArray.find((a) => a.nombre === nombre);
      if (!animal) {
        console.error("Animal no encontrado");
        return;
      }

      // Crear una instancia del animal seleccionado
      let animalInstance;
      switch (nombre) {
        case "Leon":
          animalInstance = new Leon(
            animal.nombre,
            animal.edad,
            animal.imagen,
            animal.comentarios,
            animal.sonido
          );
          animalInstance.rugir(); // Llamar al método rugir
          break;
        case "Lobo":
          animalInstance = new Lobo(
            animal.nombre,
            animal.edad,
            animal.imagen,
            animal.comentarios,
            animal.sonido
          );
          animalInstance.aullar(); // Llamar al método aullar
          break;
        case "Oso":
          animalInstance = new Oso(
            animal.nombre,
            animal.edad,
            animal.imagen,
            animal.comentarios,
            animal.sonido
          );
          animalInstance.grunir(); // Llamar al método grunir
          break;
        case "Serpiente":
          animalInstance = new Serpiente(
            animal.nombre,
            animal.edad,
            animal.imagen,
            animal.comentarios,
            animal.sonido
          );
          animalInstance.sisear(); // Llamar al método sisear
          break;
        case "Aguila":
          animalInstance = new Aguila(
            animal.nombre,
            animal.edad,
            animal.imagen,
            animal.comentarios,
            animal.sonido
          );
          animalInstance.chillar(); // Llamar al método chillar
          break;
        default:
          console.error("Animal no reconocido");
          return;
      }

      // Crear una card con la imagen y el botón de reproducir sonido
      const card = document.createElement("div");
      card.classList.add("card", "col", "col-sm-6");
      const cardImg = document.createElement("img");
      cardImg.classList.add("card-img-top");
      cardImg.src = `assets/imgs/${animalInstance.imagen}`;
      cardImg.alt = animalInstance.nombre;
      const btnReproducir = document.createElement("button");
      btnReproducir.classList.add("btn", "btn-primary", "mb-2");
      btnReproducir.textContent = "Reproducir Sonido";
      btnReproducir.addEventListener("click", () => {
        const audio = new Audio(`assets/sounds/${animalInstance.sonido}`);
        audio.play();
      });

      card.appendChild(cardImg);
      card.appendChild(btnReproducir);

      // Agregar la card al contenedor de animales
      contenedorAnimales.appendChild(card);

      // Limpiar el formulario
      document.getElementById("animal").value = "";
      document.getElementById("edad").value = "";
      document.getElementById("comentarios").value = "";
    });

    // Llenar el array de animales
    data.animales.forEach((animal) => {
      animalesArray.push(
        new Animales(
          animal.name,
          animal.edad,
          animal.imagen,
          animal.comentarios,
          animal.sonido
        )
      );
    });
  });
};

const mostrarImagen = (nombreImagen) => {
  const preview = document.getElementById("preview");
  preview.style.backgroundImage = `url('assets/imgs/${nombreImagen}')`;
  preview.style.backgroundSize = "contain";
  preview.style.backgroundRepeat = "no-repeat";
  preview.style.backgroundPosition = "center";
};

cargarAnimales();
