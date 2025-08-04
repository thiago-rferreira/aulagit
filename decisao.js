let temChaveDeFerro = true;
let temMapa = false;
let nivel = 7;
let vida = 45;

// 1. Caverna das sombras -> precisa ter chave e mapa.
let podeEntrarCaverna = temChaveDeFerro && temMapa;
console.log("Pode entrar na caverna? ",podeEntrarCaverna);

// 2. Templo do Dragao -> nivel >= 5 OU tem a chave;
let podeEntrarTemplo = nivel >=5 || temChaveDeFerro;
console.log("Pode entrar no templo? ", podeEntrarTemplo);

// 3. Bosque da Recuperacao -> vida < 50 E nao tem mapa;
let podeEntrarBosque = vida < 50 && !temMapa;
console.log("Pode entrar no bosque? ", podeEntrarBosque);


