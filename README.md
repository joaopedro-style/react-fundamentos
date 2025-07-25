# Fundamentos de React

## 14_lidando-com-efeitos-colaterais

### Sobre o useEffect

O useEffect é um hook do react usado para executar ou lidar com efeitos colaterais em componentes funcionais.

Ele serve para lidar com ações que ocorram fora do fluxo normal de renderização, como:

- Buscar dados de uma API
- Atualizar o título da página
- Adicionar/remover manipuladores de evento
- Iniciar/controlar temporizadores
- Sincronizar com mudanças extrnas

O useEffect é executado após a renderização, e pode ser configurado para rodar apenas uma vez, sempre que uma variável mudar, ou em toda renderização, dependendo das dependências fornecidas.

## 13_navegando-com-rotas

Entendendo os conceitos principais do react Router:

- Instalação: npm install react-router-dom
- BrowserRouter: componentes que envolve toda a sua aplicação no main.tsx
- Routes e Route: definem as rotas e os caminhos associados aos componentes/páginas
- Link: componente especial para navegação entre as páginas através das rotas. Deve ser usado no lugar da tag <a> (somente para links relativos/internos)

## 11_gerenciamento-de-states

State (ou Estado) é uma funcionalidade especial de um componente que representa informações que podem mudar ao longo do tempo e que, normalmente, afetam o que é exibido na interface.

Exemplos:

- Contador de likes
- Carrinho de compras
- Captura de dados de formulário
- Filtros
- Timers
- Alternância de temas/cores
- Seleção de itens

O uso de states permite ao React atualizar a interface automaticamente sempre que os dados mudarem, sem a necessidade de manipular o DOM manualmente.

## 10_manipulando-eventos

No React, nós declaramos explicitamente o que queremos que o componente faça através de props de eventos.

Estas props aceitam uma callback na sintaxe de arrow function, ou então uma chamada (apenas o nome, sem parênteses) de uma função externa.

## 09_props-com-dados-dinamicos

- Utilizamos de props para enviar dados dinâmicos para um componente
- Configuração de array de dados com definição de tipo
- Refatoração de componentes criando o ListaCursos com o map de Artigo dentro

## 08_props

Props (abreviação de properties/propriedades) são parâmetros que um componente pode receber.

Elas funcionam como atgumento de uma função, que podem receber dados de um componente pai para um componente filho.

Props basicamente são uma forma de comunicação entre componentes.

- Criação de props e definição de tipos para as props
- Desestruturação de props
- Manipulação de props opcionais
- Renderização condicional

## 07_tailwindcss

**O Tailwind CSS** é um framework CSS utilitário que permite criar interfaces de forma rápida e personalizada. Em vez de classes pré-definidas para componentes inteiros (como em frameworks tradicionais como Bootstrap), o Tailwind oferece classes utilitárias de baixo nível para controlar cada aspecto do design (margem, padding, cor, tipografia, etc.).

## Principais vantagens:

- **Alta customização**: Você estiliza diretamente no HTML com classes utilitárias, o que reduz a necessidade de escrever CSS customizado.

- **Produtividade**: Ajuda a construir layouts rapidamente, com menos contexto switching entre HTML e CSS.

- **Design consistente**: Usa um sistema de design (spacing, cores, fontes) pré-configurado que pode ser ajustado no arquivo de configuração.

- **CSS enxuto em produção**: Usa ferramentas como PurgeCSS para remover classes não utilizadas, gerando arquivos finais muito pequenos.

### sites importantes

- Site oficial: https://tailwindcss.com/
- Documentação para uso com Vite: https://tailwindcss.com/docs/installation/using-vite

## 06_styled-components

Styled Components é uma biblioteca (lib) muito usada com projetos React que permite escrever estilos CSS dentro do JavaScript usando a própria sintaxe do CSS. Os estilos ficam acoplados ao componente em que foram declarados.

### Instalação

- npm install styled-components
- npm install --save-dev @types/styled-components
- Extensão vscode-styled-components

Ao trabalhar styled Components você pode criar regras com qualquer seletor e usar lógica JavaScript dentro de template string.

## 05_modulos-css

Módulos CSS (CSS Modules) são uma maneira de escrever CSS em arquivos separados de extensão `.module.css` em que cada classe e estilo fica isolado para um único componente. Há um **acoplamento** entre o módulo e seu componente, permitindo um escopo bem definido sobre os estilos.

- Criação de módulos para cada componente (exceto Rodape)
- Importação do módulo (chamado de styles ou estilos)
- Aplicação das classes usando className={}
- Reorganização de componentes e seus módulos esm pastas
- Instalação da extensão CSS Modules

## 04_estilos

- CSS global usando seletores tradicionais
- CSS inline aplicado via style e escrevendo CSS In JS (objeto com propriedades CSS)
- CSS inline criando um objeto do tipo CSSProperties e passando-o para o style do componente

## 03_componentes-filhos-ou-internos

- Criação de um componente filho (Menu) e importação/uso no pai (Cabecalho)
- Criação de um componente filho (Artigo) e importação/uso no pai (Conteudo)
- Instalação da extensão ES7+ React

## 02_criando-e-organizando-componentes

- Separação de trechos do App em novos componentes
- Exportação e importação dos componentes
- Uso de assets e importação de imagem
- Organização dos componentes em uma pasta dedicada

## 01_usando-a-sintaxe-JSX-no-App

- Construção de um componente único (App.tsx) usando elementos HTML e Fragmento React
- Referência sobre Componentes e JSX: https://react.dev/reference/react/Component
- Instalação da extensão React Developer Tools

## 00_projeto-zerado

- Remoção do CSS
- Remoção da pasta assets
- Simplificação do componente App.tsx e do main.tsx
