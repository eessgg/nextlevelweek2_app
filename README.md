### ### Next Level Week #2 🚀

🚧 **Em andamento** 🚧

[https://nextlevelweek.com/episodios/omnistack/edicao/2](https://nextlevelweek.com/episodios/omnistack/edicao/2)

📋 Stacks

- KnexJs → [http://knexjs.org/](http://knexjs.org/)

- **🟣 ETAPA WEB**
    1. INSTALAÇÂO
        - yarn create react-app web —template typescript
    2. Limpando estrutura
        1. Estilos css
        2. Usar *rem* em fontes
    3. Navegação
        1. react-router-dom
        2. @types/react-router-dom
- **🟣 ETAPA BACKEND**
    1. Criando projeto
        - yarn add typescript -D
        - yarn tsc --init
        - yarn add ts-node-dev -D
        - **"scripts": { "start": "tsnd --transpile-only --ignore-watch node_modules --respawn src/server.ts" },**
        - yarn add express
        - yarn add @types/express -D

    2.  Bando de dados com SQLite
        - Instalando:
            - yarn add knex sqlite3
            - yarn knex (para ver comandos)
        - Migrations
            - **"knex:migrate": "knex --knexfile knexfile.ts migrate:latest", "knex:migrate:rollback": "knex --knexfile knexfile.ts migrate:rollback"**
