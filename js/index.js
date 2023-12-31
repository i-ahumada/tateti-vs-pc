// COMPUTADORA
let compuBlock = false;
let matrizJuego = [['', '', ''], ['', '', ''], ['', '', '']];

const bot = () => {
    const celdas = document.getElementsByClassName('celda');


    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === 'childList' && !compuBlock) {
                const lastMovePosition = Number(mutation.target.getAttribute('id'));
                matrizJuego[Math.floor(lastMovePosition / 3)][lastMovePosition % 3] = 'x';

                let compMove = Math.floor(Math.random() * 9);
                let tryCounter = 0;
                while (!compuBlock && (tryCounter <= 7)) {
                    if (matrizJuego[Math.floor(compMove / 3)][compMove % 3] === '') {
                        matrizJuego[Math.floor(compMove / 3)][compMove % 3] = 'o'
                        celdas[compMove].click()
                        compuBlock = true;
                        tryCounter = 0;
                    } else {
                        tryCounter++;
                        compMove = compMove <= 7 ? compMove + 1 : 0;
                    }
                    console.log(tryCounter)
                }
            } else {
                setTimeout(() => { compuBlock = false }, 100);
            }
        }
    }

    const config = { childList: true };
    const observer = new MutationObserver(callback);

    for (const celda of celdas) {
        observer.observe(celda, config)
    }
}



// MECANICAS DEL JUEGO
let cruz = true;

const Tateti = () => {
    const celdas = document.getElementsByClassName('celda');

    function agregarClickEvent(domElement) {
        domElement.addEventListener('click', () => {
            if (domElement.innerHTML === '') {
                domElement.innerHTML = cruz ? '<p> X </p>' : '<p> O </p>';
                cruz = !cruz;
            }
        });
    };

    for (const celda of celdas) {
        agregarClickEvent(celda);
    };
}

function reiniciar() {
    const celdas = document.getElementsByClassName('celda');
    matrizJuego = [['', '', ''], ['', '', ''], ['', '', '']];

    for (const celda of celdas) {
        compuBlock = true;
        cruz = true;
        celda.innerHTML = '';
    };
}



Tateti();
bot();