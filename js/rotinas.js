function testedocument() {
    // usando a propriedade do DOM chamada getElementById() conseguimos interagir
    // com os objetos do DOM, assim podemos mudar o conteúdo dos elementos dinamicamente
    document.getElementById("resultado").innerHTML =
        "<hr><p>Olá mundo eu estou aqui</p><hr>";
}

function testeconsole() {
    // VERIFIQUE NA JANELA DE CONSOLE se esta operação funcionou
    console.log("Olá mundo eu estou aqui");
}

function testewrite() {
    // usando a write do objeto document escrevemos direto na página

    document.write("<div>Olá mundo eu estou aqui</div>");
    const pi = 3.141516;
    var raio = 2 * pi;
    var nome;
    var idade;
    nome = prompt("qual seu nome ? ");
    idade = prompt("Qual sua idade ?");
    document.write("<hr><hr>");
    document.write("<p> olá " + nome + "</p>");
    document.write("<p> você já viveu " + (12 * idade)
        + " meses</p>");
}

function matrizes() {
    // criar e preencher Matrizes
    // mudei de * para - , porquê * e caractere reservado
    var deckherois = [["1ha", "1se", "1ne"],
    ["2vn", "2hf", "2gm"],
    ["3ca", "3hk", "3th"],
    ["4fa", "4de", "4pn"],
    ["5vi", "5fe", "-"],
    ["6hf", "6cm", "-"]];
    var deckviloes = [["1ha", "1se", "1ne"],
    ["2vn", "2hf", "2gm"],
    ["3ca", "3hk", "3th"],
    ["4fa", "4de", "4pn"],
    ["5vi", "5fe", "-"],
    ["6hf", "6cm", "-"]];
    //var deckthanos=

    // apresentar cada um dos elementos da matriz+
    apresentar(deckherois, "./img/herois");
    apresentar(deckviloes, "viloes");
}

function apresentar(deck, path) {
    deck.forEach(posicao => {
        document.write("<img src='" + path + "/" + posicao[0] + "small.png' width=50px>");
        document.write("<img src='" + path + "/" + posicao[1] + "small.png' width=50px>");
        document.write("<img src='" + path + "/" + posicao[2] + "small.png' width=50px><hr>");
    })}


    function testealert() {
        alert("Olá sou uma janela de aviso");
        if (!confirm("confirma que me viu ??")) {
            alert("Ué no caso vc tá cego ????");
        } else {
            var nome = prompt("Me desculpe mas qual seu Nome mesmo ?");
            alert(nome + ", Obrigado pela sua atenção")
            location.reload()
        }
    };
