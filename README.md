![gato resolvendo bugs](https://media.giphy.com/media/LmNwrBhejkK9EFP504/source.gif)

Bem vindo! Este é um sistema simples que consulta temperatura atual e as previsões dos próximos dias de acordo com sua geolocalização.


### Teste online!

A aplicação está hospedada em um host do firebase e pode ser consultada em https://weather-293422.web.app com limitações do plano free. 💸

## Arquitetura

A organização do projeto foi baseado no conceito do **Atomic Design**, onde `elements === atoms`, `components === molecules` e `compositions === organisms`. Para um projeto pequeno como este, talvez não seria o ideal. Mas para algo escalável, é o que eu costumo utilizar.

## Instalação

Vamos ao que interessa! Baixe o repositório e instale as dependências:

    yarn
ou

    npm install

## RUN!

Rode a aplicação:

    yarn start
ou

    npm start

após a execução do script, a aplicação estará disponível em http://localhost:3000.

> vale lembrar que o Safari e dispositivos móveis não permitem capturar a localização do usuário sem certificado de segurança.

## Compile

Você pode compilar o projeto executando:

    yarn build
ou

    npm run build


## Considerações finais

- O projeto foi criado a partir do [Create React App](https://github.com/facebook/create-react-app).
- Estilização com [Styled Components](https://styled-components.com/)
- Foi utilizado alguns componentes da biblioteca [@material-ui](https://material-ui.com/pt/) do Google para agilizar o desenvolvimento.
- Manipulação de data por [dayjs](https://github.com/iamkun/dayjs).
- Manipulação de dados locais via [React Context](https://pt-br.reactjs.org/docs/context.html). Optei por não utilizar Redux devido a quantidade de dados e contextos.