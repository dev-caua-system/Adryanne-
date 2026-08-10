/* =====================================
   CONFIGURAÇÃO
===================================== */

/*
   MUDE ESTA DATA PARA A DATA REAL
   EM QUE VOCÊS COMEÇARAM.

   Exemplo:

   31 de maio de 2026:

   2026-05-31

*/

const startDate = new Date("2026-05-31T00:00:00");


/* =====================================
   CONTADOR
===================================== */

function atualizarContador() {

    const agora = new Date();

    let diferenca = agora - startDate;

    if (diferenca < 0) {
        diferenca = 0;
    }


    const dias =
        Math.floor(
            diferenca / 86400000
        );


    const horas =
        Math.floor(
            (diferenca / 3600000) % 24
        );


    const minutos =
        Math.floor(
            (diferenca / 60000) % 60
        );


    const segundos =
        Math.floor(
            (diferenca / 1000) % 60
        );


    document.getElementById("days")
        .textContent =
        String(dias).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(horas).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutos).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(segundos).padStart(2, "0");
}


atualizarContador();

setInterval(
    atualizarContador,
    1000
);


/* =====================================
   SURPRESA
===================================== */

const botaoSurpresa =
    document.getElementById(
        "surpriseBtn"
    );


const surpresa =
    document.getElementById(
        "secret"
    );


botaoSurpresa.addEventListener(
    "click",
    function () {

        surpresa.classList.toggle(
            "open"
        );


        if (
            surpresa.classList.contains(
                "open"
            )
        ) {

            botaoSurpresa.textContent =
                "❤️ Eu te amo";

        } else {

            botaoSurpresa.textContent =
                "Abrir surpresa ❤️";

        }

    }
);


/* =====================================
   FOTOS
===================================== */

const inputs =
    document.querySelectorAll(
        ".photo-input"
    );


inputs.forEach(
    function (input) {

        input.addEventListener(
            "change",
            function (evento) {

                const arquivo =
                    evento.target.files[0];


                if (!arquivo) {
                    return;
                }


                const card =
                    evento.target.parentElement;


                const leitor =
                    new FileReader();


                leitor.onload =
                    function (e) {

                        card.style.backgroundImage =
                            `url("${e.target.result}")`;

                        card.style.backgroundSize =
                            "cover";

                        card.style.backgroundPosition =
                            "center";


                        const placeholder =
                            card.querySelector(
                                ".photo-placeholder"
                            );


                        placeholder.innerHTML =
                            "<span>❤️</span><p>Foto adicionada</p>";

                        placeholder.style.background =
                            "rgba(255,255,255,0.25)";

                    };


                leitor.readAsDataURL(
                    arquivo
                );

            }
        );

    }
);


/* =====================================
   ANIMAÇÃO AO ROLAR
===================================== */

const observador =
    new IntersectionObserver(
        function (entradas) {

            entradas.forEach(
                function (entrada) {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(
        function (elemento) {

            observador.observe(
                elemento
            );

        }
    );


/* =====================================
   CORAÇÕES FLUTUANDO
===================================== */

const containerCoracoes =
    document.querySelector(
        ".hearts"
    );


function criarCoracao() {

    const coracao =
        document.createElement(
            "div"
        );


    coracao.className =
        "float-heart";


    coracao.textContent =
        Math.random() > 0.35
            ? "♥"
            : "♡";


    coracao.style.left =
        Math.random() * 100 + "vw";


    coracao.style.animationDuration =
        (5 + Math.random() * 6) + "s";


    coracao.style.fontSize =
        (12 + Math.random() * 18) + "px";


    containerCoracoes.appendChild(
        coracao
    );


    setTimeout(
        function () {

            coracao.remove();

        },
        12000
    );

}


setInterval(
    criarCoracao,
    900
);