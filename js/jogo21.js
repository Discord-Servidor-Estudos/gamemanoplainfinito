//======================================== agora desafio JOGO 21 ======================
let b1 =["A♠","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠"];
let b2 =["A♣","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣"];
let b3 =["A♥","2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥"];
let b4 =["A♦","2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦"];
let baralho= b1.concat(b2,b3,b4);
//console.log(baralho);
//console.log(baralho.length);
//console.log("shufflando o baralho pra modi joga TRANCA");
baralho.sort(randOrd);
baralho.sort(randOrd);
baralho.sort(randOrd);
//console.log(baralho);
//* gerar a mao do jogador e a mao do bot
// regra do 21 , 
// 02 cartas para cada jogador, pergunta-se para o jogador 1 se ele quer mais carta, se ele quiser compra mais uma
// o jogador 2 escolhe se vai comprar cartas também....
// todo momento atento a soma de pontos na mão...
console.log("---------------------CASSINO ROYALE----------------------------------------")
//1 passo criar as 02 maos e mostrar jogadores e suas 02 cartas



function randOrd() {
    return (Math.round(Math.random())-0.5);
}