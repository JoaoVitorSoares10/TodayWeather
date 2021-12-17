# 06 - PWA e Requisições

## Principios do PWA

[Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) são, sucintamente falando, aplicativos criados em navegadores. À medida que o usuário constrói progressivamente um relacionamento com o aplicativo ao longo do tempo, ele se torna mais e mais poderoso. Ele é carregado rapidamente, mesmo em redes escamosas, envia notificações push relevantes, tem um ícone na tela inicial e é carregado como uma experiência de tela inteira de nível superior.

Então, um PWA é:

- **Progressivo** - Funciona para todos os usuários, independentemente da escolha do navegador, porque é construído com aprimoramento progressivo como um princípio básico.
- **Responsivo** - Compatível com qualquer fator de forma: desktop, celular, tablet ou o que for o próximo.
- **Independente de conectividade** - Aprimorado com `service workers` para trabalhar offline ou em redes de baixa qualidade.
- **App-like** - Parece um aplicativo, porque o modelo de shell do aplicativo separa a funcionalidade do conteúdo.
- **Fresh** - Sempre atualizado graças ao processo de atualização do `service worker`.
- **Seguro** - veiculado via HTTPS para evitar espionagem e garantir que o conteúdo não tenha sido adulterado.
- **Detectável** - É identificável como um "aplicativo" graças ao escopo do registro do W3C `manifest` e `service worker`, permitindo que os mecanismos de pesquisa o encontrem.
- **Reengajável** - Facilita o reengajamento por meio de recursos como `notificações push`.
- **Instalável** - permite que os usuários adicionem aplicativos mais úteis a sua tela inicial sem o incômodo de uma loja de aplicativos.
- **Linkable** - Compartilhe facilmente o aplicativo via URL, não requer instalação complexa.

Para que um PWA funcione sem mais problemas, devemos utilizar dois arquivos importantes:

1. `serviceWorker.js`
2. `manifest.json`

### Docs

- [Introdução aos Progressive Web Apps](https://medium.com/tableless/introdu%C3%A7%C3%A3o-aos-progressive-web-apps-ad47ba24cddb)
- https://developers.google.com/web/progressive-web-apps/
- https://create-react-app.dev/docs/making-a-progressive-web-app/

## Service Workers

Um service worker é um script que seu navegador executa em segundo plano, separado da página da Web. Isso possibilita recursos que não precisam de uma página da Web ou de interação do usuário. Atualmente, eles já incluem recursos como `notificações push` e `sincronização em segundo plano`.

Características importantes de um service worker:

- É executado em um contexto isolado;
- Não tem acesso ao DOM;
- Roda em uma thread separada;
- Incapaz de realizar operações “blocantes”;
- Funcionam apenas em sites servidos via HTTPS.
- Ele é encerrado quando ocioso e reiniciado quando necessário novamente.
- Os service workers usam `Promises`. Se você não estiver familiarizado com isso, interrompa esta leitura e confira [Promessas, uma introdução](https://developers.google.com/web/fundamentals/primers/promises?hl=pt-br).

### Docs

- [https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle?hl=pt-br](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle?hl=pt-br)

## Web App Manifest

O manifesto dos PWAs é um arquivo JSON que permite controlar como o aplicativo ou site é exibido para o usuário em áreas que normalmente se espera ver em aplicativos nativos (por exemplo, a tela inicial de um dispositivo), como definir o que o usuário pode inicializar e o visual durante a inicialização.

Quando criar o manifesto e ele estiver no seu site, adicione uma tag link a todas as páginas que envolve o seu aplicativo web da seguinte forma:

``` html
<link rel="manifest" href="/manifest.json">
```

### Docs

- https://developers.google.com/web/fundamentals/web-app-manifest/?hl=pt-br
- https://developer.mozilla.org/pt-BR/docs/Web/Manifest


## Requisições

### AJAX?
[AJAX](https://developer.mozilla.org/pt-BR/docs/Web/Guide/AJAX/Getting_Started) significa Asynchronous JavaScript e XML. Em poucas palavras, é o uso do objeto XMLHttpRequest para se comunicar com os scripts do lado do servidor. Ele pode enviar bem como receber informações em uma variedade de formatos, incluindo JSON, XML, HTML, e até mesmo arquivos de texto. Porém a característica mais atraente do AJAX, é a sua natureza "assíncrona", o que significa que ele pode fazer tudo isso sem a necessidade de atualizar a página. Isso permite a você atualizar partes de uma página com base em eventos do usuário.

### fetch
A [API Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global `fetch()` que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.
Este tipo de funcionalidade era obtida anteriormente utilizando `XMLHttpRequest`. Fetch fornece uma alternativa melhor que pode ser facilmente utilizada por outras tecnologias como Service Workers. Fetch também provê um lugar lógico único para definir outros conceitos relacionados ao protocolo HTTP como CORS e extensões ao HTTP.

**GET**
``` js
fetch('https://mywebsite.com/mydata.json').then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});
```

**POST**
``` js
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
});
```

### Axios
Axios é um cliente HTTP, que funciona tanto no browser quanto em node.js. A biblioteca é basicamente uma API que sabe interagir tanto com `XMLHttpRequest` quanto com a interface `http` do node.

```js
// Requisições do tipo GET
axios.get(`https://api.github.com/users/${username}`)
  .then(response => {
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });  

// Requisições POST, note há um parâmetro extra indicando os parâmetros da requisição
axios.post('/save', { firstName: 'Marlon', lastName: 'Bernardes' })
  .then(response => {
    console.log('salvo com sucesso')
  });  
```

### Docs
- [Usando Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
- [Axios](https://github.com/axios/axios)
- [Como usar Axios como cliente HTTP](http://codeheaven.io/how-to-use-axios-as-your-http-client-pt/)
- [Como usar AJAX e APIs com React](https://pt-br.reactjs.org/docs/faq-ajax.html)

## Desafio

Vocês deveram fazer um app onde o usuário pode buscar algo através de um ou mais `inputs` e/ou `selects` e retornar os valores de uma API na tela.

### Tema livre
Use qualquer uma das APIs disponíveis na URL abaixo:
- [Public APIs](https://github.com/public-apis/public-apis)

### Especificado
Utilize uma entre essas APIs abaixo e feça uma aplicação que receba um input e filtre os valores:

- [FIPE API HTTP REST](https://deividfortuna.github.io/fipe/)
- [Cotação de Moedas](https://docs.awesomeapi.com.br/)
- [Consulta de CEP](https://viacep.com.br/)

### Obrigatório para ambos
- Mude as cores principais do Aplicativo;
- Altere a "splash page" do App conforme seu gosto;
- Adicione um meio de quando a página for acessada aparecer uma opção para adicionar o App na tela inicial;
- Faça com que a página consiga ser acessada sem acesso à internet depois do primeiro acesso (destaque-se exibindo uma mensagem de que não há conexão);

Inicialização:

- De um Fork no repositório: https://gitlab.com/acct.fateclab/dev-turma-1-sem-2021/06-pwa-e-requisicoes-http.git;
- Agora você deve clonar o repositório localmente, há um botão azul "Clone" no seu repositório do GitLab, clique nele e use a URL com HTTPS.
- Agora localmente abra uma pasta e use o botão direito do Mouse para abrir o "Git Bash", com esse atalho você chegará na pasta que quer mais rapidamente pelo terminal.
- Use o comando git clone `url-copiada-do-gitlab` para que a estrutura de pastas do repositório seja clonada na sua pasta.
- Utilize o `create-react-app` para criar inicializar as pastas do projeto.

Entrega:

- Assim que terminar dê `git push origin seu-nome/pwa-e-requisicoes`.
- Acesse o menu "Merge Requests", configure o "Target Branch" para o repositório original para que seu App seja avaliado e revisado e para que possamos te dar um feedback.
- O nome do Merge Request deve ser o seu nome completo.
- Crie o Merge Request.

Dica: Após usar o comando npm start você conseguirá acessar o App pelo seu celular na URL após "On Your Network".
