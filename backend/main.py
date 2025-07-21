from fastapi import FastAPI
from pydantic import BaseModel
import requests
from bs4 import BeautifulSoup
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class BuscaRequest(BaseModel):
    nome: str

@app.post("/buscar-pokemon")
def buscar_pokemon(dados: BuscaRequest):
    nome = dados.nome.lower()
    url = f"https://pokemondb.net/pokedex/all"

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }
    response = requests.get("https://pokemondb.net/pokedex/all", headers=headers, timeout=10)

    soup = BeautifulSoup(response.text, "html.parser")

    linhas = soup.find_all("tr")

    for linha in linhas:
        nome_element = linha.find("a", class_="ent-name")
        if nome_element and nome_element.text.strip().lower() == nome:
            numero = linha.find("span", class_="infocard-cell-data").text.strip()
            nome_pkm = nome_element.text.strip()
            imagem = linha.find("img")["src"]

            tipos = [a.text for a in linha.find_all("a", class_="type-icon")]


            celulas = linha.find_all("td", class_="cell-num")
            if len(celulas) >= 7:
                total = celulas[1].text
                hp = celulas[2].text
                atk = celulas[3].text
                defense = celulas[4].text
                spatk = celulas[5].text
                spdef = celulas[6].text
                speed = celulas[7].text
            else:
                total = hp = atk = defense = spatk = spdef = speed = "?"

            return {
                "numero": numero,
                "nome": nome_pkm,
                "tipos": tipos,
                "imagem": imagem,
                "stats": {
                    "total": total,
                    "hp": hp,
                    "atk": atk,
                    "def": defense,
                    "sp_atk": spatk,
                    "sp_def": spdef,
                    "speed": speed
                }
            }

    return {"erro": "Pokémon não encontrado"}
