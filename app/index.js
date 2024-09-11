
const { select, input, checkbox } = require('@inquirer/prompts');
const fs = require('fs').promises;

let mensagem = "Bem vindo ao app de Metas";

let metas

const carregarMetas = async () => {
    try {
        const dados = await fs.readFile("metas.json", "utf-8");
        metas = JSON.parse(dados);
    } catch (error) {
        metas = [];
    }
}

const salvarMetas = async () => {
    await fs.writeFile("metas.json", JSON.stringify(metas, null, 2));
}

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta" });

    // Verifica se a meta inserida está vazia.
    if (meta.length == 0) {
        mensagem = "A meta não pode ser vazia.";
        return;
    }

    metas.push(
        { value: meta, checked: false }
    );

    mensagem = "Meta cadastrada com sucesso!"
}

const listarMetas = async () => {

    if (metas.length == 0) {
        mensagem = "Não existem metas.";
        return;
    }

    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar.",
        choices: [...metas],
        instructions: false,
    });

    metas.forEach((m) => {
        m.checked = false;
    });

    if (respostas.length == 0) {
        mensagem = "Nenhuma meta selecionada";
    }

    respostas.forEach(resposta => {
        const meta = metas.find((m) => {
            return m.value == resposta;
        });
        meta.checked = true;
    });

    mensagem = "Meta(s) marcada(s) como concluída(s)";
}

const metasRealizadas = async () => {

    if (metas.length == 0) {
        mensagem = "Não existem metas.";
        return;
    }
    const realizadas = metas.filter((meta) => {
        return meta.checked;;
    })
    if (realizadas.length == 0) {
        mensagem = "Não exisstem metas realizadas";
        return;
    }

    await select({
        message: "Metas Realizadas: " + realizadas.length,
        choices: [...realizadas]
    })
}

const metasAbertas = async () => {

    if (metas.length == 0) {
        mensagem = "Não existem metas.";
        return;
    }

    const abertas = metas.filter((meta) => {
        return true.checked != true;
    })
    if (abertas.length == 0) {
        mensagem = "Não existem metas abertas :)";
        return;
    }

    await select({
        message: "Metas Abertas: " + abertas.length,
        choices: [...abertas]
    })
}

const deletarMetas = async () => {

    if (metas.length == 0) {
        mensagem = "Não existem metas.";
        return;
    }

    const metadDesmarcadas = metas.map((meta) => {
        return { value: meta.value, checked: false };
    });

    const itensADeletar = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar.",
        choices: [...metadDesmarcadas],
        instructions: false,
    });

    if (itensADeletar.length == 0) {
        mensagem = "Nenhum item pra deletar!";
        return;
    }
    itensADeletar.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item;
        })
    })
    mensagem = "Meta(s) deleta(s) com sucesso!";

}
const mostrarMensagem = () => {
    console.clear();

    if (mensagem != "") {
        console.log(mensagem);
        console.log("");
        mensagem = "";
    }
}

const start = async () => {
    await carregarMetas();

    while (true) {
        mostrarMensagem();
        await salvarMetas();

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
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Metas abertas",
                    value: "abertas"
                }, {
                    name: "Deletar metas",
                    value: "deletar"
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
                break;
            case "listar":
                await listarMetas();
                break;
            case "realizadas":
                await metasRealizadas();
                break;
            case "abertas":
                await metasAbertas();
                break;
            case "deletar":
                await deletarMetas();
                break;
            case "sair":
                console.log("Até a próxima");
                return;
        }
    }
}

start();
