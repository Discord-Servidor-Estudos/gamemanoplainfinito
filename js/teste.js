// revisão e testes de MATRIZES e ESTRUTURAS
// 06-06 - shopeeeee
let deckh = ["1se", "1ha", "1ne", "2vn", "2hf", "2gm", "3ca",
    "3hk", "3th", "4fa", "4de", "4pn", "5vi", "5fe",
    "6hf", "6cm"];
// diferença entre LET e VAR, na prática o LET evita que o mesmo nome seja usado em outro local
//do código
const pi = 3.1414;
console.log("Deck completo: "+deckh);
console.log("Tamanho: "+deckh.length);
console.log("primeiro elemento "+deckh[0]);
console.log("ultimo elemento "+deckh[15]);
deckh.push("THOR");
console.log("-----------------------------------------------------")
console.log("Deck completo: "+deckh);
console.log("Tamanho: "+deckh.length);
console.log("o ultimo elemento é o :"+ deckh.pop()+" .. saiu !!!");
console.log("Deck completo: "+deckh);
console.log("Tamanho: "+deckh.length);
console.log("-----------------------------------------------------")
console.log("o primeiro item é: "+deckh.shift()+" e já saiu");
console.log("Deck completo: "+deckh);
console.log("-----------------------------------------------------")
let mao=["","",""];
console.log(mao);
console.log("tamanho da mao => "+mao.length);
mao[0]=deckh.shift();
mao[1]=deckh.shift();
mao[2]=deckh.shift();
console.log("tamanho da mao => "+mao.length);
console.log(mao);
console.log("-----------------------------------------------------")
console.log("Deck completo: "+deckh);
let descarte= mao.splice(2,1); // retiro posição, 1
console.log("-----------------------------------------------------")
console.log(mao);
console.log("-----------------------------------------------------")
console.log(mao[2]);
console.log("lembrando que a carta descartada foi: "+descarte);
// embaralhar o deck da maneira mais rapida possivel
console.log("exiba o Deck em ordem alfabetica"+ deckh.sort());
console.log(mao.sort());
console.log("***********************************************");
console.log("o deck estava asssim :"+deckh);
console.log("******************embaralhado*****************************");
deckh.sort(randOrd);
deckh.sort(randOrd);
deckh.sort(randOrd);
console.log(deckh.sort(randOrd));
console.log("***********************************************");
function randOrd() {
        return (Math.round(Math.random())-0.5);
}
