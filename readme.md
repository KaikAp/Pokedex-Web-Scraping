# 📦 Pokémon Web Scraper
Este projeto é um aplicativo web simples criado com FastAPI (Python) no backend e React no frontend, com o objetivo de praticar estudar conceitos de web scraping.

## 🎯 Objetivo
O projeto foi desenvolvido com foco educacional para aprender e aplicar técnicas de web scraping. Ele permite buscar e exibir informações de um Pokémon específico extraídas do site pokemondb.net.

## 🛠️ Tecnologias Utilizadas
Backend (API)
O backend é desenvolvido com FastAPI, utilizando as bibliotecas requests para fazer requisições HTTP, BeautifulSoup para extrair dados do HTML e uvicorn para rodar o servidor.

Frontend
O frontend é feito em React, utilizando HTML e CSS para criar a interface e comunicar-se com o backend via fetch.

## 🚀 Como Rodar Localmente
Backend
Crie um ambiente virtual (opcional, mas recomendado):

- python -m venv venv
- source venv/bin/activate  # Linux/macOS
- venv\Scripts\activate     # Windows
- Instale as dependências:

- pip install fastapi uvicorn requests beautifulsoup4

- Inicie o servidor FastAPI:
- uvicorn main:app --reload
O backend estará disponível em http://localhost:8000.

Frontend
Navegue até a pasta do frontend React e instale as dependências:

- npm install

Rode o frontend:

- npm start
- O React irá abrir em http://localhost:3000 e se comunicará com o backend.

## 🔍 Como Funciona a Busca
O frontend envia o nome do Pokémon para o backend via uma requisição POST. O backend então acessa a página https://pokemondb.net/pokedex/all, faz o scraping da tabela, localiza o Pokémon pelo nome, extrai seus dados (número, tipos, stats, imagem) e retorna os dados para o frontend exibir.