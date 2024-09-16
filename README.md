# Porjeto feito no evento nlw Rocketseat

## Gerenciador de Metas

Este é um aplicativo de console para gerenciar metas, onde você pode cadastrar, listar, marcar como realizadas, visualizar metas abertas, excluir metas e muito mais. O app salva e carrega as metas de um arquivo JSON, permitindo que você acompanhe seu progresso.

## Funcionalidades

- **Cadastrar Meta**: Permite que o usuário adicione uma nova meta ao sistema.
- **Listar Metas**: Exibe todas as metas cadastradas, permitindo marcar ou desmarcar como concluída.
- **Metas Realizadas**: Exibe uma lista das metas que já foram concluídas.
- **Metas Abertas**: Exibe uma lista das metas que ainda não foram concluídas.
- **Deletar Metas**: Permite deletar metas não concluídas.
- **Salvar/Carregar Metas**: As metas são salvas em um arquivo JSON (`metas.json`) para uso futuro.

## Instalação

1. Clone o repositório ou baixe os arquivos do projeto.
   
   ```bash
   git clone https://github.com/seu-usuario/repo-gerenciador-de-metas.git
   ```
2. Acesse o diretório do projeto e instale as dependências:

   ```bash
   cd repo-gerenciador-de-metas
   npm install
   ```
## Uso
1. Execute o aplicativo:

   ```bash
   node index.js
   ```

2. Você verá um menu interativo no terminal com as seguintes opções:

- Cadastrar Meta: Adicionar uma nova meta.
- Listar Metas: Listar todas as metas e marcar ou desmarcar como concluídas.
- Metas Realizadas: Ver metas que foram concluídas.
- Metas Abertas: Ver metas que ainda estão pendentes.
- Deletar Metas: Excluir metas do sistema.
- Sair: Fechar o aplicativo.

## Dependências

- `@inquirer/prompts:` Biblioteca para criar prompts interativos no terminal.
- `fs:` Módulo nativo do Node.js para manipulação de arquivos.

Instale as dependências usando o comando:

   ```bash
   npm install @inquirer/prompts
   ```
## Estrutura do Projeto

- `app.js:` Arquivo principal contendo toda a lógica do aplicativo.
- `metas.json:` Arquivo onde as metas são salvas e carregadas automaticamente.
