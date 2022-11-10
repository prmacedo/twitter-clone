# Twitter clone

Projeto desenvolvido durante a Sprint 05 do Programa de Bolsas da [Compass.uol](https://compass.uol/pt/home/).

### Home `localhost:5173`
![image](https://user-images.githubusercontent.com/44329969/199125309-893eb95b-678d-4985-ac01-c182185daffb.png)

### Profile `localhost:5173/profile`
![image](https://user-images.githubusercontent.com/44329969/199125464-b047534e-b5ec-48ce-b5b5-a1664b9c4098.png)

## Layout

- [Link para layout no Figma](https://www.figma.com/file/E0J4sPihtdgIMI2Z4BOmLv/UI-Twitter-Web-(Community))

## Responsividade

- Desktop (acima de 1280px)

## Tecnologias utilizadas

- [ReactJS](https://pt-br.reactjs.org/)
- [SCSS](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Node.JS](https://nodejs.org/en/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start)
- [Google Fonts](https://fonts.google.com/)

## Funcionalidades

- Temas dark e light
- Tweets com no máximo 380 caracteres
- Tweets com ou sem imagem
- Telas Home `localhost:5173` e Profile `localhost:5173/profile` navegáveis
- Telas Log In `localhost:5173/login` e Sign In `localhost:5173/signup` navegáveis
- Tela de página não encontrada `localhost:5173/not-found`
- Validação e autenticação de Usuário
- Contabilizar likes
- Fazer comentários

## Usuário válidos

| E-mail                    | Senha        |
| ------------------------- | ------------ |
| `davidebiscuso@gmail.com` | `twitter123` |
| `devon@gmail.com`         | `twitter123` |
| `darlene@gmail.com`       | `twitter123` |

## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| white             | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF.png) #FFFFFF |
| red               | ![#F4245E](https://via.placeholder.com/15/F4245E/F4245E.png) #F4245E |
| blue-1            | ![#1DA1F2](https://via.placeholder.com/15/1DA1F2/1DA1F2.png) #1DA1F2 |
| blue-2            | ![#1A8CD8](https://via.placeholder.com/15/1A8CD8/1A8CD8.png) #1A8CD8 |
| black             | ![#0F1419](https://via.placeholder.com/15/0F1419/0F1419.png) #0F1419 |
| dark-1            | ![#17202A](https://via.placeholder.com/15/17202A/17202A.png) #17202A |
| dark-2            | ![#1C2733](https://via.placeholder.com/15/1C2733/1C2733.png) #1C2733 |
| dark-3            | ![#283340](https://via.placeholder.com/15/283340/283340.png) #283340 |
| dark-4            | ![#3A444C](https://via.placeholder.com/15/3A444C/3A444C.png) #3A444C |
| dark-5            | ![#5B7083](https://via.placeholder.com/15/5B7083/5B7083.png) #5B7083 |
| dark-6            | ![#8899A6](https://via.placeholder.com/15/8899A6/8899A6.png) #8899A6 |
| dark-7            | ![#EBEEF0](https://via.placeholder.com/15/EBEEF0/EBEEF0.png) #EBEEF0 |
| dark-8            | ![#F7F9FA](https://via.placeholder.com/15/F7F9FA/F7F9FA.png) #F7F9FA |

## Documentação das fontes

Fontes e tamanhos utilizados.

`font-family: 'Poppins', sans-serif`

| label | font-size |
| ----- | --------: |
| xs    |      13px |
| sm    |      15px |
| base  |      16px |
| lg    |      19px |
| xl    |      20px |
| 2xl   |      21px |
| 4xl   |      23px |

## Instalação

Para rodar o projeto primeiro instale as dependências com o npm.

```
  npm install
```

Após instalar, execute o seguinte comando para acessar a documentação em ``localhost:6006``.

```
  npm run storybook
```

Ou então execute o seguinte comando para acessar o projeto em ``localhost:5173``.

```
  npm run dev
```