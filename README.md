# Dashboard administrativo Empório da Cerveja

## Descrição
Dashboard administrativo que permite gerenciar os produtos e usuários cadastrados. Nesta aplicação é possível:
1. Listar, cadastrar e remover* usuários (Administrador / Editor)
2. Listar, cadastrar e remover produtos

*Apenas administradores podem visualizar a página de usuários.

## Demonstração
![](https://github.com/bm-santos/root-emporio-dashboard/blob/main/emporio-dashboard/src/assets/demo-web.gif)
> Layout Web

[](https://github.com/bm-santos/root-emporio-dashboard/blob/main/emporio-dashboard/src/assets/demo-mobile.gif)
> Layout Mobile

## Como usar este repositório

#### Repositório: `root-emporio-dashboard`

Esta aplicação foi desenvolvida dentro da pasta **emporio-dashboard** e o servidor roda dentro da pasta **fake-api-emporio**.

#### Passo a passo
- Clone o repositório para a sua máquina

`$ git clone root-emporio-dashboard.git`

- Entre no Git, navegue até a pasta **emporio-dashboard** e execute os comandos abaixo:

`$ npm install`

`$ npm start`

- Em uma nova janela do Git, navegue até a pasta **fake-api-emporio** e execute os comandos abaixo:

`$ npm install`

`$ json-server db.json -m ./node_modules/json-server-auth -r routes.json --port 4000`

Uma janela do navegador abrirá, solicitando as credencias para acesso.

#### Credenciais para acesso
- **Administrador**

e-mail: **helen@facebook.com** | senha: **123123**

- **Editor**

e-mail: **mauricio@google.com** | senha: **123123**

