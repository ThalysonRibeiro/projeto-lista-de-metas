## Linaguagem de programação

Manira de dar instrução ao computador.
Como um lego. você irá utilizar peças pra criar algoritimos, ou seja, para resolver problemas.

   **Algoritomos**: Senquência de passos lógicos e finita para resolução de um problema.

## Peças de uma linguagem:

- Comentarios
- Declarações de variáveis (const, let)
- Operadores (atribuição, concatenação, matemáticos, lógicos)
- Tipos de dados (strings, number, boolean)
- Estruturas de dados (functions, object, array)
- Controle de fluxo (if/else)
- Estruturas de repetições (for, forof, while)

# Fases de resoloção de um problema:

 - [x] Coletar os dados
 - [x] Processar os dados (manipular, alterar ...)
 - [x] Apresentar os dados

## Escopo e variáveis:

 - [x] Variáveis globais e locais
 - [x] Constantes

## Tipos de dados:

 - [x] Strings "texto"
 - [x] Number 2, 1.2
 - [x] functions

## Operadores:

 - [x] Operadores de atribuição de valor =
 - [x] Operador de concatenação +
 - [x] Operadores de comparação: == === != <>
 - [x] spread operator: ...

## Estruturas de dados:

### Arrays:

 - [x] Uma lista que contem qualquer tipo de dado
 - [x] Metodos de array: [ push, find, filter, map ] HOF (higher order functions)

 ### Object:

 - [x] Atributos e métodos
 - [x] Criação e manipulação de objetos
 - [x] Acesso a propiedades de objetos

 ### Functions:

 - [x] Criar, passar argumentos
 - [x] Executar
 - [x] Arrow function / named function

 # Estrutura de rapetição:

 - [x] while

 # Condicionais:

 - [x] swith
 - [x] if else

 ## Módulos node.js:

 - [x] Importação de modulos (require, CommonJS)
 - [x] Biblioteca 'inquirer' para criar pronpts interativos


## Programação assícronas e promesas:

- [x] Uso de funções (async/await)

```js
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
```