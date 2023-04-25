## Requerimentos para rodar o projeto

  - node: "^16.0.0"
  - npm: "^8.0.0",
  - yarn: "^1.0.0"

## Passo a passo

 - Primeiro clone o projeto do  [design system](https://github.com/abiliobitt/web-components)
 - Abra projeto no seu editor e instale as dependências (`yarn build` ou `npm run build`)
 - Clone [este projeto](https://github.com/abiliobitt/desafio_web) na mesma pasta do **design system**  `git clone https://github.com/abiliobitt/web-components.git`
 - Abra o projeto e instale as dependências
 - Crie um arquivo com nome **.env.local** e adicione as seguintes variáveis de ambiente:

>     REACT_APP_TITLE='Desafio Web'
>     REACT_APP_API_URL='http://localhost:5000'

 - Rode o comando "clear"  (`yarn clear` ou `npm run clear`)
 - Rode em algum terminal separado o comando `npx json-server --watch db.json --port 5000`
 - Dê start no projeto (`yarn start` ou `npm start`)

## Testes e2e
Rodar o comando `yarn cy:open` ou `npm run cy:open`