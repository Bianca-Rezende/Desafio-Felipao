let nickname = `Kyra`;
let nivel;
let xp = 9000;

if (xp <= 1000) {
    nivel = `FERRO`;
} else if (xp <= 2000) {
    nivel = `Nível BRONZE`;
} else if (xp <= 5000) {
    nivel = `Nível PRATA`;
} else if (xp <= 7000) {
    nivel = `Nível OURO`;
} else if (xp <= 8000) {
    nivel = `Nível PLATINA`;
} else if (xp <= 9000) {
    nivel = `Nível ASCENDENTE`;
} else if (xp <= 10000) {
    nivel = `Nível IMORTAL`;
} else {
    nivel = `Nível RADIANTE`;
}

console.log(`O Herói ${nickname} está no ${nivel}`);