<table>
  <tr>
    <td><img src="https://github.com/luiizsilverio/jstack-garcom/blob/master/web/src/assets/images/logo.svg" /></td>
  <tr>
  </tr>
    <td><h1>WAITERAPP - O APP DO GARÇOM</h1></td>
  </tr>
</table>


## Conteúdo
* [Sobre a aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Screenshots](#camera_flash-screenshots)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre a aplicação
Aplicação desenvolvida durante o evento __JStack__, promovido pela empresa __O Poder do Javascript__.<br />
Foram 5 dias de aula, totalizando mais de 17 horas de vídeo, desenvolvendo uma API em Node, um front-end em React e um aplicativo mobile em React Native.<br />
A aplicação permite lançar pedidos no celular e fechar os pedidos na aplicação web. Os pedidos podem estar na situação Aguardando, Em preparação ou Finalizado.<br />
O backend armazena os dados em um banco de dados __MongoDb__ e interage com o front-end por meio de __WebSockets__.<br/>


## :hammer_and_wrench: Tecnologias
* Back-end
  * __Node__ + __Express__ + __Typescript__
  * __Multer__ para upload de imagens
  * __Socket.io__ para interação com front-end
  * __Mongoose__ + __MongoDb__ para banco de dados
* Front-end
  * __React__ + __Vite__ + __Typescript__
  * __Styled-Components__ para estilização
  * __Socket.io-client__ para interação com back-end
  * __React-Toastify__ para exibição de mensagens
  * __Axios__ para acessar a API
* Mobile
  * __React Native__ + __Expo__ + __Typescript__
  * __Styled-Components__ para estilização
  * __Axios__ para acessar a API
  * __DotEnv__ para variáveis de ambiente
<br />

## :car: Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.<br/>
Renomeie os arquivos _.env.example_ da pasta _web_ e _mobile_ para _.env_ e informe o _ip:porta_ da API.<br/>
```bash
$ git clone https://github.com/luiizsilverio/jstack-garcom
```
* Back-end
```bash
$ cd api
$ yarn
$ yarn dev
```
* Front-end
```bash
$ cd ..
$ cd web
$ yarn
$ yarn dev
```
* Mobile
```bash
$ cd ..
$ cd mobile
$ yarn
$ yarn start
```


## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/jstack-garcom/blob/master/mobile/src/assets/images/waiter-app.gif)
![](https://github.com/luiizsilverio/jstack-garcom/blob/master/web/src/assets/images/waiter-web.gif)

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
