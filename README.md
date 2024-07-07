# Fashion Hub
- Loja de roupas (projeto em andamento)
- Telas:
    - Catálogo de produtos

![Tela de catálogo de produtos](./client/src/images/readmeImg.png)

# Principais tecnologias utilizadas:
  - React
  - Typescript
  - Node.js / Express
  - MySQL
  - Axios

# Como instalar e iniciar
- Crie o arquivo .env nas pastas "client" e "server"

- Adicione as variáveis de ambiente no arquivo .env de acordo com o arquivo example.env

- No MySQL, crie um Schema com o mesmo nome da variável que configurou em DB_NAME nas .env
    - Crie uma Table com o nome "products" e as colunas "id, name, price, color, category, imgUrl"

- No diretório principal, execute os seguintes comandos em ordem:

`npm install concurrently`

`npm install`

- Para iniciar o projeto, execute:

`npm start`