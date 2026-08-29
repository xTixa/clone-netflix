# Clone Netflix

Interface inspirada na plataforma Netflix, construída com React Vite, consumindo dados reais de filmes e séries através da [API do TMDB](https://www.themoviedb.org/documentation/api).

> Projeto desenvolvido apenas para praticar os conhecimentos adquiridos. Os dados (títulos, imagens, elenco) são fornecidos pela API do TMDB e não têm qualquer ligação com a Netflix.

## Funcionalidades

- **Home** — banner de destaque e carrosséis: em destaque na semana, filmes populares, séries populares, filmes e séries mais bem avaliados.
- **Pesquisa** (`/search?q=...`) — pesquisa multi (filmes + séries) via TMDB, acessível através da barra de pesquisa presente na navbar.
- **Página de detalhes** (`/movie/:id`) — poster, sinopse, géneros, trailer (embed do YouTube) e elenco. Funciona tanto para filmes quanto para séries.

## Tecnologias

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) para navegação entre páginas
- [Tailwind CSS](https://tailwindcss.com/) para estilização
- [Axios](https://axios-http.com/) para chamadas à API do TMDB
- [ESLint](https://eslint.org/) para lint do código

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) instalado e uma chave de API gratuita do TMDB (gerada em [themoviedb.org](https://www.themoviedb.org/settings/api)).

```bash
# instalar dependências
npm install

# copiar o exemplo de variáveis de ambiente e preencher com a sua chave
cp .env.example .env

# rodar em modo desenvolvimento
npm run dev
```

Abra o endereço que será apresentado no terminal (por padrão `http://localhost:5173`).

> **Nota:** a chave da API é lida da variável de ambiente `VITE_TMDB_API_KEY` (definida no ficheiro `.env`, que não é versionado). O código nunca contém a chave diretamente — não faças commit do `.env`.

### Scripts disponíveis

| Comando           | Descrição                                |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento      |
| `npm run build`   | Gera a build de produção em `dist/`       |
| `npm run preview` | Serve localmente a build gerada           |
| `npm run lint`    | Executa o ESLint no projeto               |

## Estrutura do projeto

```
src/
├── assets/            # imagens estáticas
├── components/        # componentes reutilizáveis (navbar, banner, moviecard, footer...)
├── data/              # dados auxiliares/estáticos
├── layouts/           # layouts compartilhados entre páginas
├── pages/             # páginas roteadas (Home, Search, MoviePage)
├── services/          # integração com a API do TMDB (services/tmdb.js)
├── App.jsx            # definição das rotas
└── main.jsx           # ponto de entrada da aplicação
```

## Rotas

| Rota          | Página     | Descrição                          |
| ------------- | ---------- | ----------------------------------- |
| `/`           | Home       | Banner + carrosséis de destaques    |
| `/search?q=`  | Search     | Resultados de busca                 |
| `/movie/:id`  | MoviePage  | Detalhes de um filme ou série       |

## Deploy (GitHub Pages)

O deploy é automatizado via GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)): a cada push na branch `main`, o projeto dá build e é publicado no GitHub Pages.

Como o `.env` não é versionado, a chave da API precisa ser configurada como *secret* do repositório para que o build no GitHub Actions tenha acesso a ela:

1. No repositório GitHub, vá em **Settings → Secrets and variables → Actions → New repository secret**.
2. Nome: `VITE_TMDB_API_KEY`. Valor: a sua chave da API do TMDB.
3. Em **Settings → Pages**, defina a origem (*Source*) como **GitHub Actions**.
4. Faça push para `main` — o workflow builda o projeto e publica automaticamente.

## Créditos

Dados e imagens fornecidos por [The Movie Database (TMDB)](https://www.themoviedb.org/). Este produto usa a API do TMDB mas não é certificado pelo TMDB.
