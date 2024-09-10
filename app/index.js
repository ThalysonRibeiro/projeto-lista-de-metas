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

const { select, input, checkbox } = require('@inquirer/prompts');
let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}
let metas = [meta];

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta" });

    if (meta.length == 0) {
        console.log("A meta não pode ser vazia.");
        // return cadastrarMeta();
        return
    }
    metas.push(
        { value: meta, checked: false }
    );
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar.",
        choices: [...metas],
        instructions: false,
    });

    if (respostas.length == 0) {
        console.log("Nenhuma meta selecionada");

    }

    metas.forEach((m) => {
        m.checked = false;
    })

    respostas.forEach(resposta => {
        const meta = metas.find((m) => {
            return m.value == resposta;
        })
        meta.checked = true;
    });

    console.log("Meta(s) marcadas como concluida(s)");

}

const start = async () => {

    while (true) {

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar Meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        });

        switch (opcao) {
            case "cadastrar":
                await cadastrarMeta();
                console.log(metas);
                break;
            case "listar":
                await listarMetas();
                break;

            case "sair":
                console.log("Até a proxima");

                return
        }
    }
}
start();