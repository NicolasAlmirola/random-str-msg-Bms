const messages = [
    "Aquí es donde todo comienza...",
    "Comprometerse",
    "El control de versiones es horrible",
    "COMMIT TODOS LOS ARCHIVOS!",
    "Lo mismo que hacemos todas las noches, Pinky: ¡intentar conquistar el mundo!",
    "Bloquear S-foils en posición de ataque",
    "Este commit es una mentira",
    "¡Te lo explicaré cuando seas mayor!",
    "Aquí hay dragones",
    "Reinventando la rueda. De nuevo.",
    "este no es el mensaje de compromiso que está buscando",
    "Batman! (Este commit no tiene padres)",
];

const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
    funnyCommit
};