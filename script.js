// =========================
// MENÚ RESPONSIVE
// =========================

const menu = document.querySelector("nav");

function toggleMenu() {
    menu.classList.toggle("activo");
}

// ==========================
// CONTADORES DE ESTADÍSTICAS
// ==========================

const contadores = document.querySelectorAll(".contador");

const iniciarContadores = () => {

    contadores.forEach(contador => {

        const objetivo = Number(contador.dataset.target);

        let numero = 0;

        const velocidad = Math.max(1, Math.floor(objetivo / 100));

        const actualizar = () => {

            numero += velocidad;

            if (numero < objetivo) {

                contador.textContent = numero;

                requestAnimationFrame(actualizar);

            } else {

                contador.textContent = objetivo;

            }

        };

        actualizar();

    });

};

let contadoresIniciados = false;

window.addEventListener("scroll", () => {

    const estadisticas = document.querySelector(".estadisticas");

    if (!estadisticas || contadoresIniciados) return;

    const posicion = estadisticas.getBoundingClientRect().top;

    if (posicion < window.innerHeight - 100) {

        iniciarContadores();

        contadoresIniciados = true;

    }

});


// =========================
// BUSCADOR DEL SITIO
// =========================

function buscarSitio(){

    const texto = document
        .getElementById("busqueda")
        .value
        .toLowerCase()
        .trim();

    if(texto === "") return;


    const secciones = {

        "inicio": "#inicio",
        "historia": "#historia",
        "explorar": "#explora",
        "niveles": "#niveles",
        "galeria": "#galeria",
        "informacion": "#informacion",
        "información": "#informacion",
        "contacto": "#informacion",
        "ubicacion": "#informacion",
        "ubicación": "#informacion",
        "noticias": "#noticias",
        "turnos": "#turnos",
        "mision": "#historia",
        "misión": "#historia",
        "vision": "#historia",
        "visión": "#historia"

    };


    if(secciones[texto]){

        document
            .querySelector(secciones[texto])
            .scrollIntoView({
                behavior:"smooth"
            });

    }

}

// ==========================
// JUANMA - GUÍA DEL COLEGIO
// ==========================

function juanmaGuia(opcion){

    const chat = document.getElementById("chat-body");

    const respuestas = {

        historia: {
            texto: "🏫 El Colegio Nacional Dr. Juan Manuel Frutos nació a partir de una iniciativa educativa que con el tiempo se consolidó como institución de educación secundaria.",
            destino: "#historia"
        },

        niveles: {
            texto: "🎓 Nuestro colegio cuenta con diferentes niveles educativos. Puedes conocerlos en la sección Niveles Educativos.",
            destino: "#niveles"
        },

        turnos: {
            texto: "🕐 Contamos con turnos mañana, tarde y noche. Puedes consultar los detalles en la sección Turnos.",
            destino: "#turnos"
        },

        galeria: {
            texto: "📸 ¡Aquí puedes conocer algunos momentos y espacios de nuestro colegio!",
            destino: "#galeria"
        },

        ubicacion: {
            texto: "📍 El colegio se encuentra en Boquerón e Ingavi, Mariano Roque Alonso.",
            destino: "#informacion"
        },

        contacto: {
            texto: "📞 Puedes encontrar nuestro teléfono, correo electrónico, dirección y mapa en la sección Información.",
            destino: "#informacion"
        }

    };

    const respuesta = respuestas[opcion];

    if(!respuesta) return;

    chat.innerHTML += `
        <div class="mensaje-juanma">
            ${respuesta.texto}
        </div>
    `;

    chat.scrollTop = chat.scrollHeight;

    setTimeout(() => {

        document.querySelector(respuesta.destino)
        .scrollIntoView({
            behavior:"smooth"
        });

    }, 700);

}

// =========================
// ABRIR Y CERRAR JUANMA
// =========================

function abrirChat(){

    const chatbot = document.getElementById("chatbot");

    chatbot.classList.add("abierto");

}


function cerrarChat(){

    const chatbot = document.getElementById("chatbot");

    chatbot.classList.remove("abierto");

}

// =========================
// BOTÓN VOLVER ARRIBA
// =========================

const botonArriba = document.getElementById("volverArriba");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        botonArriba.style.display = "flex";
    } else {
        botonArriba.style.display = "none";
    }

});


botonArriba.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

