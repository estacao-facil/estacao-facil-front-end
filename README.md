# Estação Fácil - Front-end

Este projeto utiliza **HTML**, **Tailwind CSS**, e **JavaScript** puro para a criação de uma interface responsiva. Também utiliza **PostCSS** para processamento e otimização do CSS. Siga as instruções abaixo para configurar o ambiente localmente após clonar o repositório.

## Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- **Node.js**: [Instale aqui](https://nodejs.org/) (versão recomendada: LTS)
- **npm**: O npm geralmente vem instalado junto com o Node.js

## Passos para Configurar o Projeto

### 1. Clonar o Repositório

Primeiro, clone o repositório para a sua máquina local usando o comando:

```bash
git clone https://github.com/estacao-facil/estacao-facil-front-end.git
```

### 2. Navegar para o Diretório do Projeto2. Navegar para o Diretório do Projeto

Entre no diretório do projeto clonado:

```bash
cd estacao-facil-front-end
```

### 3. Instalar Dependências

O projeto utiliza várias dependências, como Tailwind CSS, PostCSS, e Autoprefixer. Para instalar todas as dependências, execute:

```bash
npm install
```

Esse comando vai instalar tudo que está listado no arquivo package.json, incluindo as dependências de desenvolvimento.

### 4. Compilar o CSS com Tailwind

Para começar a compilar o CSS com o Tailwind, execute o seguinte comando:

```bash
npm run build:css
```

Esse comando compilará o arquivo CSS utilizando o Tailwind e o PostCSS, criando a versão final na pasta dist/css.

### 5. Rodar o Projeto

Agora você pode abrir o arquivo index.html diretamente no navegador ou usar um servidor local para visualizar as mudanças. Recomenda-se usar uma extensão como Live Server no VSCode ou uma ferramenta similar para visualizar o projeto dinamicamente.

## Estrutura do Projeto
Abaixo está uma visão geral da estrutura de diretórios e arquivos do projeto:

- **/src**: Esta pasta contém todo o código-fonte do projeto.
  - **/css**: Diretório onde os estilos CSS baseados no Tailwind são escritos. Aqui, você encontrará o arquivo `styles.css` com as diretivas do Tailwind para compilar o CSS.
  - **/js**: Diretório onde ficam os arquivos JavaScript responsáveis pelas interações e funcionalidades do front-end.
  - **/*.html**: Os arquivos HTML do projeto. Cada página do site (ex.: `index.html`, `about.html`) reside aqui, definindo a estrutura da interface do usuário.
  
- **/dist**: Este diretório contém os arquivos finais compilados e otimizados prontos para produção. Após a compilação do Tailwind e do JavaScript, os arquivos processados serão armazenados aqui.
  - **/css**: Contém o arquivo CSS final gerado pela compilação do Tailwind CSS (`styles.css`).
  - **/js**: Se houver scripts otimizados ou minificados, eles também estarão neste diretório.

- **/node_modules**: Diretório gerado automaticamente pelo npm que contém todas as dependências instaladas para o projeto. Este diretório não é versionado no Git e é gerado a partir do arquivo `package.json`.

- **tailwind.config.js**: Arquivo de configuração do Tailwind, onde você pode personalizar o framework (cores, tipografia, espaçamento, etc.) conforme a necessidade do projeto.

- **postcss.config.js**: Arquivo de configuração do PostCSS, usado para processar e otimizar o CSS, aplicando plugins como Autoprefixer e Tailwind.

- **package.json**: Arquivo que define as dependências do projeto e scripts npm, incluindo `tailwindcss`, `postcss`, e outros pacotes necessários.

- **package-lock.json**: Arquivo gerado automaticamente que garante a consistência das versões das dependências instaladas. Ele bloqueia as versões exatas usadas no projeto.

- **/designs**: Pasta onde os protótipos ou mockups de design exportados do Figma ou outras ferramentas são armazenados para referência visual.
