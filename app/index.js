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

// Importa as funções 'select', 'input' e 'checkbox' da biblioteca '@inquirer/prompts'.
const { select, input, checkbox } = require('@inquirer/prompts');

// Define uma meta inicial, com um valor padrão e a chave 'checked' como false.
let meta = {
    value: 'Tomar 3L de água por dia', // Meta padrão a ser realizada.
    checked: false, // Indica se a meta foi concluída ou não.
}

// Cria um array chamado 'metas', inicialmente com a meta definida acima.
let metas = [meta];

// Função assíncrona para cadastrar uma nova meta.
const cadastrarMeta = async () => {
    // Aguarda a entrada do usuário para o valor da nova meta.
    const meta = await input({ message: "Digite a meta" });

    // Verifica se a meta inserida está vazia.
    if (meta.length == 0) {
        console.log("A meta não pode ser vazia.");
        return; // Retorna para evitar que uma meta vazia seja cadastrada.
    }

    // Adiciona a nova meta ao array 'metas', com 'checked' inicial como false.
    metas.push(
        { value: meta, checked: false }
    );
}

// Função assíncrona para listar e selecionar as metas.
const listarMetas = async () => {
    // Mostra as metas para o usuário em um checkbox, permitindo a seleção de múltiplas metas.
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar.",
        choices: [...metas], // Exibe as metas disponíveis para seleção.
        instructions: false, // Remove as instruções padrão do prompt.
    });

    // Define todas as metas como não concluídas (checked: false).
    metas.forEach((m) => {
        m.checked = false;
    });

    // Verifica se nenhuma meta foi selecionada.
    if (respostas.length == 0) {
        console.log("Nenhuma meta selecionada");
    }


    // Marca as metas que foram selecionadas como concluídas (checked: true).
    respostas.forEach(resposta => {
        const meta = metas.find((m) => {
            return m.value == resposta; // Encontra a meta correspondente ao valor selecionado.
        });
        meta.checked = true; // Marca a meta como concluída.
    });

    console.log("Meta(s) marcadas como concluída(s)");
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked;;
    })
    console.log(realizadas);
    if (realizadas.length == 0) {
        console.log("Não exisstem metas realizadas");
        return;
    }

    await select({
        message: "Metas Realizadas " + realizadas.length,
        choices: [...realizadas]
    })
}

// Função principal para controlar o fluxo do programa.
const start = async () => {

    // Loop infinito para manter o menu interativo até o usuário decidir sair.
    while (true) {
        // Exibe o menu de opções e aguarda a escolha do usuário.
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar Meta", // Opção para cadastrar uma nova meta.
                    value: "cadastrar"
                },
                {
                    name: "Listar metas", // Opção para listar e marcar metas como concluídas.
                    value: "listar"
                },
                {
                    name: "Metas realizadas", // Opção para listar e marcar metas como concluídas.
                    value: "realizadas"
                },
                {
                    name: "Metas abertas", // Opção para listar e marcar metas como concluídas.
                    value: "abertas"
                },
                {
                    name: "Sair", // Opção para encerrar o programa.
                    value: "sair"
                }
            ]
        });

        const metasAbertas = async () => {
            const abertas = metas.filter((meta) => {
                // return true.checked != true;
                return !true.checked;
            })
            if (abertas.length == 0) {
                console.log("Não existem metas abertas :)");
                return;
            }

            await select({
                message: "Metas Abertas " + abertas.length,
                choices: [...abertas]
            })
        }

        // Verifica a opção selecionada e executa a ação correspondente.
        switch (opcao) {
            case "cadastrar":
                // Se a opção for "cadastrar", chama a função para cadastrar uma nova meta.
                await cadastrarMeta();
                console.log(metas); // Exibe as metas cadastradas.
                break;
            case "listar":
                // Se a opção for "listar", chama a função para listar e marcar metas.
                await listarMetas();
                break;
            case "realizadas":
                await metasRealizadas();
                break;
            case "abertas":
                await metasAbertas();
                break;
            case "sair":
                // Se a opção for "sair", exibe uma mensagem de despedida e encerra o loop.
                console.log("Até a próxima");
                return; // Encerra o programa.
        }
    }
}

// Chama a função 'start' para iniciar o programa.
start();
