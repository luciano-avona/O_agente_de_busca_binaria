const listaOrdenada = [10, 22, 35, 47, 50, 68, 75, 88, 91, 100];
const numeroAlvo = 75;

// Estado interno / Memória do agente
let baixo = 0;
let alto = listaOrdenada.length - 1;
let encontrado = false;

console.log(`[Agente]: Iniciando busca racional pelo número ${numeroAlvo}...`);

while (baixo <= alto) {
    // Sensores calculando a percepção atual
    const meio = Math.floor((baixo + alto) / 2);
    const valorPercebido = listaOrdenada[meio];

    console.log(`[Sensor]: Analisando índice ${meio} (Valor encontrado: ${valorPercebido})`);

    // Regra Racional
    if (valorPercebido === numeroAlvo) {
        console.log(`[Atuador]: Alvo ENCONTRADO no índice ${meio}!`);
        encontrado = true;
        break;
    } else if (valorPercebido > numeroAlvo) {
        console.log(`[Agente]: ${valorPercebido} é muito alto. Reduzindo limite superior.`);
        alto = meio - 1;
    } else {
        console.log(`[Agente]: ${valorPercebido} é muito baixo. Elevando limite inferior.`);
        baixo = meio + 1;
    }
}

if (!encontrado) {
    console.log("[Atuador]: Alvo não existe neste ambiente.");
}
