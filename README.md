## Description

Este projeto tem como objetivo criar uma API que forneça as informações necessárias para exibir dentro de uma tabela para o cliente, contando com tecnologias como NestJs, TypeOrm e GraphQl.

## Installation

$ yarn
$ yarn add @nestjs/typeorm @types/graphql dataloader graphql graphql-tools typeorm type-graphql voyager sqlite3 

## Running the app

# Migrations
$ yarn typeorm migration:create -n create-users

OBS: A migration criada deve estar dentro da pasta "migrations", caso criar fora dela por favor arrasta-la.

$ yarn migration:run

# watch mode
$ yarn start:dev

Depois disso irá abrir uma aba no seu navegador com a url localhost:3003

