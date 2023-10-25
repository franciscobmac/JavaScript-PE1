let equipo1Goles = 0;
let equipo2Goles = 0;

function mostrarMarcador() {
    console.log(`Boca: ${equipo1Goles} goles - River: ${equipo2Goles} goles`);
}

function determinarGanador() {
    if (equipo1Goles >= 5) {
        console.log("¡Boca gana!");
    } else if (equipo2Goles >= 5) {
        console.log("¡River gana!");
    } else {
        console.log("El juego continúa...");
    }
}

function turnoEquipo(equipo) {
    if (equipo === 1) {
        equipo1Goles++;
        console.log("¡Gol para Boca!");
    } else if (equipo === 2) {
        equipo2Goles++;
        console.log("¡Gol para River!");
    }
    mostrarMarcador();
    determinarGanador();
}

while (equipo1Goles < 5 && equipo2Goles < 5) {
    const equipoQueAnota = prompt("¿Qué equipo anota un gol? (1 para Boca, 2 para River)");
    if (equipoQueAnota === "1" || equipoQueAnota === "2") {
        turnoEquipo(parseInt(equipoQueAnota));
    } else {
        console.log("Ingresa un número válido (1 o 2) para indicar el equipo que anota.");
    }
}