# 📦 Pokédex Web Scraper

Um aplicativo web simples que utiliza FastAPI no backend e React no frontend para praticar conceitos de **web scraping**. O projeto busca informações de Pokémons diretamente do site [pokemondb.net](https://pokemondb.net) e exibe seus dados na interface.

---

## 🎯 Objetivo

Este projeto tem propósito educacional, com foco em aprender e aplicar técnicas de web scraping para coletar e apresentar informações específicas de Pokémons.

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **FastAPI**: framework web moderno e rápido em Python.
- **Requests**: para realizar requisições HTTP.
- **BeautifulSoup**: para parsear e extrair dados de páginas HTML.
- **Uvicorn**: servidor ASGI para rodar a aplicação.

### Frontend
- **React**: biblioteca JavaScript para construir a interface.
- **HTML & CSS**: para estruturar e estilizar o frontend.
- Comunicação com backend via `fetch` API.

---

## 🚀 Como Executar Localmente

### Backend

1. (Opcional) Crie e ative um ambiente virtual:

```bash
python -m venv venv
# Linux/macOS
source venv/bin/activate
# Windows
venv\Scripts\activate
```

2. Instale as dependências:
```bash
pip install fastapi uvicorn requests beautifulsoup4
```
3. Inicie o servidor FastAPI:
```bash
uvicorn main:app --reload
```

### Frontend
1. Navegue até a pasta do frontend React:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Rode a aplicação:
```bash
npm start
```
O frontend abrirá em http://localhost:3000 e se comunicará com o backend.
