# Testeui - Plataforma Laravel com React

Este é um projeto que utiliza Laravel no backend e React no frontend, com Vite como bundler.

## Requisitos

- PHP 8.2 ou superior
- Composer
- Node.js (versão atual LTS recomendada)
- npm

## Instalação

1. Clone este repositório:
```bash
git clone https://github.com/txoly06/Testeui.git
cd Testeui
```

2. Instale as dependências do PHP:
```bash
composer install
```

3. Instale as dependências do Node.js:
```bash
npm install
```

4. Configure o arquivo .env:
```bash
cp .env.example .env
php artisan key:generate
```

5. Configure seu banco de dados no arquivo .env

## Executando a aplicação

Para iniciar o servidor Laravel:
```bash
php artisan serve
```

Para iniciar o servidor Vite (desenvolvimento):
```bash
npm run dev
```

Acesse a aplicação em http://localhost:5173

## Estrutura do Projeto

- `/app` - Código PHP do Laravel
- `/resources/js` - Código React
- `/resources/css` - Estilos CSS
- `/routes` - Rotas do Laravel
- `/public` - Arquivos públicos
- `/database` - Migrações e seeders