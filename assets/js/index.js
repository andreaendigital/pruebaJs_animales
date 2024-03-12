//Version con IIFE - async/await
import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.js";

let inputAnimal = document.getElementById("animal");
let inputEdadAnimal = document.getElementById("edad");
let inputComentarioAniamal = document.getElementById("comentarios");
let vistaPreviaAnimal = document.getElementById("preview");
let botonAgregarAnimal = document.getElementById("btnRegistrar");

//IIFE para encapsular el código principal y realizar la consulta asíncrona
(async () => {
    //simulación de una consulta asíncrona para obtener las imágenes
    async function obtenerImagenesAsync() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const imagenesAnimales = {
                    Leon: "./assets/imgs/Leon.png",
                    Lobo: "./assets/imgs/Lobo.jpg",
                    Oso: "./assets/imgs/Oso.jpg",
                    Serpiente: "./assets/imgs/Serpiente.jpg",
                    Aguila: "./assets/imgs/Aguila.png",
                };
                resolve(imagenesAnimales);
            }, 250); //simulamos una demora de 1/4 segundo
        });
    }

    //Función para mostrar la vista previa según el animal seleccionado
    async function mostrarVistaPrevia(animalSeleccionado) {
        //obtener las imágenes de forma asíncrona
        const imagenesAnimales = await obtenerImagenesAsync();

        //obtiene la ruta de la imagen según el animal seleccionado
        let rutaImagen = imagenesAnimales[animalSeleccionado];

        //actualiza la vista previa con la nueva imagen
        vistaPreviaAnimal.style.backgroundImage = `url(${rutaImagen})`;
    }

    //Agregar el evento de cambio al elemento select dentro de la IIFE
    inputAnimal.addEventListener("change", function () {
        //obtiene el valor seleccionado en el select
        let animalSeleccionado = inputAnimal.value;

        //actualiza la vista previa según el animal seleccionado
        mostrarVistaPrevia(animalSeleccionado);
    });

    //Escuchar el evento de clic en el botón de agregar dentro de la IIFE
    botonAgregarAnimal.addEventListener("click", async function () {
        //obtener valores del formulario
        let nombreAnimal = inputAnimal.value;
        let edadAnimal = inputEdadAnimal.value;
        let comentariosAnimal = inputComentarioAniamal.value;

        //validar que se hayan ingresado todos los datos
        if (!nombreAnimal || !edadAnimal || !comentariosAnimal) {
            alert("Por favor, complete todos los campos del formulario.");
            return;
        }

        //Crear instancia según el tipo de animal seleccionado
        let animal;
        switch (nombreAnimal) {
            case "Leon":
                animal = new Leon(
                    nombreAnimal,
                    edadAnimal,
                    "./assets/imgs/Leon.png",
                    comentariosAnimal,
                    "./assets/sounds/Rugido.mp3",
                    // "./assets/sounds/Rugido.mp3"
                );
                break;
            case "Lobo":
                animal = new Lobo(
                    nombreAnimal,
                    edadAnimal,
                    "./assets/imgs/Lobo.jpg",
                    comentariosAnimal,
                    "./assets/sounds/Aullido.mp3",
                    "./assets/sounds/Aullido.mp3"
                );
                break;
            case "Oso":
                animal = new Oso(
                    nombreAnimal,
                    edadAnimal,
                    "./assets/imgs/Oso.jpg",
                    comentariosAnimal,
                    "./assets/sounds/Grunido.mp3",
                    "./assets/sounds/Grunido.mp3"
                );
                break;
            case "Serpiente":
                animal = new Serpiente(
                    nombreAnimal,
                    edadAnimal,
                    "./assets/imgs/Serpiente.jpg",
                    comentariosAnimal,
                    "./assets/sounds/Siseo.mp3",
                    "./assets/sounds/Siseo.mp3"
                );
                break;
            case "Aguila":
                animal = new Aguila(
                    nombreAnimal,
                    edadAnimal,
                    "./assets/imgs/Aguila.png",
                    comentariosAnimal,
                    "./assets/sounds/Chillido.mp3",
                    "./assets/sounds/Chillido.mp3"
                );
                break;
            default:
                alert("Seleccione un tipo de animal válido.");
                return;
        }

        //Mostrar la instancia en la tabla
        MostrarEnTabla(animal);

        //Restablecer el formulario a su estado inicial
        resetFormulario();
    });
})();
//Fin de la IIFE

//Función para mostrar la instancia en la tabla
function MostrarEnTabla(animal) {
    //obtener el contenedor de animales
    let contenedorAnimales = document.getElementById("Animales");

    //crear un elemento div para la nueva card del animal
    let nuevaCard = document.createElement("div");
    nuevaCard.classList.add("card", "participante", "m-2", "bg-secondary");

    //crear el contenido HTML de la card del animal
    nuevaCard.innerHTML = `
  <img src="${animal.Img}" class="card-img-top" alt="${animal.Nombre} style="max-width: 300px; max-height: 200px; object-fit: cover;" data-toggle="modal" data-target="#exampleModal">
  <div class="card-body text-center">
    <img src="./assets/imgs/audio.svg" alt="Audio" class="w-25">
  </div>
  `;

    //agregar la nueva card al contenedor de animales
    contenedorAnimales.append(nuevaCard);

    //agregar evento clic para abrir la ventana modal
    let modalImagen = nuevaCard.querySelector("img");
    modalImagen.addEventListener("click", function () {
        mostrarDetalleModal(animal);
    });
}

//Función para mostrar el detalle del animal en la ventana modal
function mostrarDetalleModal(animal) {
    // Obtener elementos de la ventana modal
    let modalImg = document.getElementById("modalImagen");
    let modalEdad = document.getElementById("modalEdad");
    let modalComentarios = document.getElementById("modalComentarios");

    //actualizar contenido de la ventana modal
    modalImg.src = animal.Img;
    modalEdad.textContent = `\n Edad: ${animal.Edad}`;
    modalComentarios.textContent = `Comentarios: ${animal.Comentarios}`;

    //mostrar la ventana modal
    $("#exampleModal").modal("show");
}

//Función para restablecer el formulario
function resetFormulario() {
    inputAnimal.value = ""; //restablecer el valor del animal seleccionado
    inputEdadAnimal.value = ""; //restablecer el valor de la edad
    inputComentarioAniamal.value = ""; //restablecer el valor de los comentarios
    vistaPreviaAnimal.style.backgroundImage = ""; //limpiar la vista previa
}
