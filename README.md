# React Tailwindcss with Vite

This is a template build with Vite, React 18, TypeScript, Vitest, Testing Library, TailwindCSS 3, Eslint, Prettier, and Docker with Nginx.  
The template is implemented from boilerplate template [here](https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate)

## What is inside?

This project uses many tools like:

- [Vite](https://vitejs.dev)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Docker](https://www.docker.com/)
- [Nginx](https://nginx.org)

## Prerequisites
Ensure you have the following installed on your local development machine:

- Node.js (version 14 or later)
- npm or yarn
- pnpm
- Docker

## Getting Started

### Install

Install dependencies.

```bash
pnpm install
```

Serve with hot reload at <http://localhost:5173>.

```bash
pnpm run dev
```
### Routing 

Uses Next.js-like routing:

Create a new file in the src/app directory to add a new route.

```arduino
myapp/
├── src/
│   ├── app/
|   |   ├── content
|   |   |   ├── [id]
|   |   |   |   ├── page.tsx // localhost:5173/content/[id]
|   |   |   ├── page.tsx // localhost:5173/content
│   │   ├── page.tsx // localhost:5173
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
└── ...
```

### Lint

```bash
pnpm run lint:fix
```

### Build

```bash
pnpm run build
```

### Test

```bash
pnpm run test
```

View and interact with your tests via UI.

```bash
pnpm run test:ui
```

### Docker

Create a docker container and serve with Nginx
```bash
docker-compose up --build -d
```

## License

This project is licensed under the MIT License.
