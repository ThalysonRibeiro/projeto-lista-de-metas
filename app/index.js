//variavel
// let mensagem = "hello word";

//escopo
// {
//     const mensagem = "não pode mudar variavel em const"
//     console.log(mensagem);
// }

// hello word
// console.log(mensagem);

//array
// let metas = ["rafa", "alo"];
// console.log(metas[0] + " " + metas[1]);

//object
// let meta = {
//     value: "ler um livro por mês",
//     checked: true
// }

// let metas = [
//     meta,
//     {
//         value: "caminhar 20 minutos por dia",
//         checked: false
//     }
// ]

// console.log(metas[1].value);

//function arrow function
// function criarMeta() { }
// const criarMeta = () => {

// }

// const start = () => {
//     let count = 0;
//     while (count <= 10) {
//         console.log(count);
//         count++;
//     }
// }
// start();

const start = () => {
    let opcao = "cadrastrar";
    while (true) {
        switch (opcao) {
            case "cadastar":
                console.log("vamos cadastrar");
                break;
            case "listar":
                console.log("vamos listar");
                break;

            case "sair":
                return
        }
    }
}
start();