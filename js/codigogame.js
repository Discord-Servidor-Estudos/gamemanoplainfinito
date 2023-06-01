// variaveis definidas para todas as rotinas
// sao visiveis em todas as partes do codigo
var deckh = ["1ha", "1se", "1ne", "2vn", "2hf", "2gm", "3ca",
    "3hk", "3th", "4fa", "4de", "4pn", "5vi", "5fe",
    "6hf", "6cm"];
var deckt = ["1jm", "1or", "1or", "2cg", "2ja", "3je", "3en",
    "4jp", "4pm", "5fe", "5jr", "6jt", "7th"];
var baralhoh = new Array(15);
var baralhot = new Array(12);
var memoriathanos = new Array(01);
var maoheroi = new Array(1);
var maothanos = new Array(2);
var pdescartes = 0;
var inicio = true;


function startgame() {
// toda vez que clicar
    // verifica se é inicio de jogo, se for preparar os baralhos e ditribuir cartas
    if (inicio) {
        embaralhar(deckh, baralhoh);
        // mandar deck do thanos e baralho do thanos como argumentos
        embaralhar(deckt, baralhot);
        deckh = ["1ha", "1se", "1ne", "2vn", "2hf", "2gm", "3ca",
            "3hk", "3th", "4fa", "4de", "4pn", "5vi", "5fe",
            "6hf", "6cm"];
        deckt = ["1jm", "1or", "1or", "2cg", "2ja", "3je", "3en",
            "4jp", "4pm", "5fe", "5jr", "6jt", "7th"];
            // cartas para thanos, são 03 no inicio
        // mão recebe a proxima carta do baralho
        maothanos[0] = baralhot.shift();
        maothanos[1] = baralhot.shift();
        maothanos[2] = baralhot.shift();
        maoheroi[0] = baralhoh.shift();
        // comecou o game, portanto inicio falso
        inicio=false;

    };
    // mudança no texto do botão
    var botao = document.getElementById("start");
    
    if (botao.innerText == "Start") {
        botao.innerText = "Clique para sua vez heroi";
    } else { botao.innerText = "Start" };
    
    
    document.getElementById("maoh1").setAttribute("src", "./img/herois/" + maoheroi[0] + ".png");
    vozthanos.volume = 0.8;
    vozthanos.play();

    // primeira fase jogando aleatorio sem consultar a memoria
    // todo: pensar em como trabalharemos guardar informações de cartas na "memória"
    var x = Math.floor(Math.random() * 3);
    while (maothanos[x]=='7th') {
        console.log("Ops rolou um 7 naum poidi");
        var x = Math.floor(Math.random() * 3);
    }

    document.getElementById("cat").setAttribute("src", "./img/thanos/" + maothanos[x] + ".png");
    document.getElementById("cat").style.visibility = "visible";
    document.getElementById("maot1").style.visibility = "hidden";
    // atraves do switch case iremos analisar a carta e realizar o seu efeito e/ou  
    // regras das joias...
    var escrito = document.getElementById("escritos");
    // exibir
     // exibe a carta
     var cartajogada = document.getElementById("cat");
    
     switch (maothanos[x]) {
        //"1jm", "1or", "1or", "2cg", "2ja", "3je", "3en",
        // "4jp", "4pm", "5fe", "5jr", "6jt", "7th"
        case '1or':
            // para um jogo entre 02 esta carta é igual a joia da mente// 
            var numero = Math.floor(Math.random() * 5) + 1;
            escrito.innerText = "eu escolhi o número " + numero;
            if (maoheroi[0].slice(0, 1) != numero) {
                escrito.innerText = escrito.innerText + " , e me dei mal ...";
                 //pdescartes=pdescartes+1;
                pdescartes++;
                document.getElementById("mesathanos").style.visibility = "visible";
                document.getElementById("mt" + pdescartes).setAttribute("src", 
                cartajogada.getAttribute("src"));
                delete maothanos[x];
            } else {
                escrito.innerText = escrito.innerText + "... hah hah hah Você ira descartar esta carta e perder vida !!!";
                // programar perca de vida do heroi
                // placar
                //
            };
           
            maothanos[x] = baralhot.shift();
            break;
        case "1jm":
             // para um jogo entre 02 esta carta é igual a joia da mente// 
             var numero = Math.floor(Math.random() * 5) + 1;
             escrito.innerText = "eu escolhi o número " + numero;
             if (maoheroi[0].slice(0, 1) != numero) {
                 escrito.innerText = escrito.innerText + " , e me dei mal ...";
 
             } else {
                 escrito.innerText = escrito.innerText + "... hah hah hah Você ira descartar esta carta e perder vida !!!";
                 // programar perca de vida do heroi
                 // placar
                 //
             };
             //pdescartes=pdescartes+1;
             pdescartes++;
             document.getElementById("mesathanos").style.visibility = "visible";
             document.getElementById("mt" + pdescartes).setAttribute("src", 
             cartajogada.getAttribute("src"));
             delete maothanos[x];
             maothanos[x] = baralhot.shift();
            break;
        case "5fe":
                // para um jogo entre 02 esta carta é igual a joia da mente// 
                var numero = Math.floor(Math.random() * 5) + 1;
                escrito.innerText = "eu escolhi o número " + numero;
                if (maoheroi[0].slice(0, 1) != numero) {
                    escrito.innerText = escrito.innerText + " , e me dei mal ...";
    
                } else {
                    escrito.innerText = escrito.innerText + "... hah hah hah Você ira descartar esta carta e perder vida !!!";
                    // programar perca de vida do heroi
                    // placar
                    //
                };
                //pdescartes=pdescartes+1;
                pdescartes++;
                document.getElementById("mesathanos").style.visibility = "visible";
                document.getElementById("mt" + pdescartes).setAttribute("src", 
                cartajogada.getAttribute("src"));
                delete maothanos[x];
                maothanos[x] = baralhot.shift();
               break;
        case "4pm":
                // para um jogo entre 02 esta carta é igual a joia da mente// 
                var numero = Math.floor(Math.random() * 5) + 1;
                escrito.innerText = "eu escolhi o número " + numero;
                if (maoheroi[0].slice(0, 1) != numero) {
                    escrito.innerText = escrito.innerText + " , e me dei mal ...";
    
                } else {
                    escrito.innerText = escrito.innerText + "... hah hah hah Você ira descartar esta carta e perder vida !!!";
                    // programar perca de vida do heroi
                    // placar
                    //
                };
                //pdescartes=pdescartes+1;
                pdescartes++;
                document.getElementById("mesathanos").style.visibility = "visible";
                document.getElementById("mt" + pdescartes).setAttribute("src", 
                cartajogada.getAttribute("src"));
                delete maothanos[x];
                maothanos[x] = baralhot.shift();
               break;
        case "4jp":
                // para um jogo entre 02 esta carta é igual a joia da mente// 
                var numero = Math.floor(Math.random() * 5) + 1;
                escrito.innerText = "eu escolhi o número " + numero;
                if (maoheroi[0].slice(0, 1) != numero) {
                    escrito.innerText = escrito.innerText + " , e me dei mal ...";
    
                } else {
                    escrito.innerText = escrito.innerText + "... hah hah hah Você ira descartar esta carta e perder vida !!!";
                    // programar perca de vida do heroi
                    // placar
                    //
                };
                //pdescartes=pdescartes+1;
                pdescartes++;
                document.getElementById("mesathanos").style.visibility = "visible";
                document.getElementById("mt" + pdescartes).setAttribute("src", 
                cartajogada.getAttribute("src"));
                delete maothanos[x];
                maothanos[x] = baralhot.shift();
               break;
        case "3en":
             // para um jogo entre 02 esta carta é igual a joia da mente// 
             var numero = Math.floor(Math.random() * 5) + 1;
             escrito.innerText = "eu escolhi o número " + numero;
             if (maoheroi[0].slice(0, 1) != numero) {
                 escrito.innerText = escrito.innerText + " , e me dei mal ...";
 
             } else {
                 escrito.innerText = escrito.innerText + "... hah hah hah Você ira descartar esta carta e perder vida !!!";
                 // programar perca de vida do heroi
                 // placar
                 //
             };
             //pdescartes=pdescartes+1;
             pdescartes++;
             document.getElementById("mesathanos").style.visibility = "visible";
             document.getElementById("mt" + pdescartes).setAttribute("src", 
             cartajogada.getAttribute("src"));
             delete maothanos[x];
             maothanos[x] = baralhot.shift();
            break;
        case "2cg":
             // para um jogo entre 02 esta carta é igual a joia da mente// 
             var numero = Math.floor(Math.random() * 5) + 1;
             escrito.innerText = "eu escolhi o número " + numero;
             if (maoheroi[0].slice(0, 1) != numero) {
                 escrito.innerText = escrito.innerText + " , e me dei mal ...";
 
             } else {
                 escrito.innerText = escrito.innerText + "... hah hah hah Você ira descartar esta carta e perder vida !!!";
                 // programar perca de vida do heroi
                 // placar
                 //
             };
             //pdescartes=pdescartes+1;
             pdescartes++;
             document.getElementById("mesathanos").style.visibility = "visible";
             document.getElementById("mt" + pdescartes).setAttribute("src", 
             cartajogada.getAttribute("src"));
             delete maothanos[x];
             maothanos[x] = baralhot.shift();
            break;
           
    }
}



function embaralhar(deck, baralho) {
    // limite por exemplo 13
    var limite = deck.length;
    for (let pos = 0; pos < limite; pos++) {
        // sorteio posição aleatoria de 0 a length
        sorteio = Math.floor(Math.random() * limite);
        // baralho(0)<=====deck(sorteio)
        baralho[pos] = deck[sorteio];
        //splice retira a posição 1 a partir do sorteio
        deck.splice(sorteio, 1);
        // atualizo a variavel limite com o novo tamanho do deck 
        limite = deck.length;
    }
}
function ampliar(x) {
    document.getElementById("cah").setAttribute("src", x.getAttribute("src"));
    document.getElementById("cah").style.visibility = "visible";
}
function normalizar() {
    document.getElementById("cah").style.visibility = "hidden";
}
// rotinas de som//
function tocatrilha() {
    trilha.play();
    trilha.volume = 0.05;
}
function pausatrilha() {
    trilha.pause();
    trilha.volume = 0;
}
function ajustesom() {
    console.log(trilha.volume);
    if (trilha.volume < 1 || trilha.volume > 0.00) {
        if (event.wheelDelta > 1) {
            trilha.volume = trilha.volume + 0.01;
        } else {

            trilha.volume = trilha.volume - 0.01;
        }
    }
}

