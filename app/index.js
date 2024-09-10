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
let meta = {
    value: "ler um livro por mês",
    checked: false,
    isChecked: (info) => {
        console.log(info);

    }
}
meta.value = "não é mais ler um livro"
meta.isChecked(meta.value);


//function arrow function
// function criarMeta() { }
const criarMeta = () => {

}

