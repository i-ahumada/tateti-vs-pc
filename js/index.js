// COMPUTADORA

const bot = () => {
    const celdas = document.getElementsByClassName('celda');
    let matrizJuego = [['', '', ''], ['', '', ''], ['', '', '']];



    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === 'childList') {
                const lastMovePosition = Number(mutation.target.getAttribute('id'));
                matrizJuego[Math.floor(lastMovePosition / 3)][lastMovePosition % 3] = 'x';
                console.log(lastMovePosition);
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

const Tateti = () => {
    let cruz = true;
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
    for (const celda of celdas) {
        celda.innerHTML = '';
    };
}



Tateti();
bot();