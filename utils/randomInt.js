// Retorna um inteiro aleatório no intervalo [min, max], onde min e max são inteiros
function randomInt(min, max) {
    return Math.floor((Math.random() * (max + 1 - min)) + min);
};

module.exports = randomInt;
