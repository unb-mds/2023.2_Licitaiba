# Licitaíba - Extrator de Licitações do Diário Oficial da Paraíba

<p align="center">
<img src="https://github.com/unb-mds/2023-2-Squad04/blob/main/docs/assets/imgs/logo-licitaiba.png" alt="Logo Licitaíba" width="300" style="display: block; margin: 0 auto;">
  <br>
  Logo do projeto Licitaíba
</p>

O projeto "Licitaíba" é uma iniciativa destinada a automatizar a coleta e o acompanhamento de informações relacionadas a licitações públicas no estado da Paraíba, Brasil.

### 🔗 Acesse o site:
https://unb-mds.github.io/2023.2_Licitaiba/

⚠️ **Este repositório trata-se do front-end do Projeto Licitaíba. Visite o [repositório principal](https://github.com/unb-mds/2023-2-Squad04) para encontrar documentações, issues e demais assuntos relacionados ao projeto.**

---

## 👨‍🔧 Tutorial para executar o front do Projeto "Licitaíba"

### ⚠️ Pré-requisitos
- [Docker](https://www.docker.com/get-started)

### 1. ⏬ Clonar o Repositório
Para começar, abra o terminal e clone o repositório do GitHub em um diretório local da seguinte maneira:
```
git clone https://github.com/unb-mds/2023.2_Licitaiba.git
```

### 2. 🚢 Navegar até a pasta "src" 🗂️
Vamos entrar na pasta "src" do projeto usando o terminal. Certifique-se de estar na raiz do repositório clonado:
```
cd 2023.2_Licitaiba/src
```

### 3. 💻 Construindo a imagem e iniciando com o Docker
Agora, você pode usar o seguinte comando para construir a imagem Docker e iniciar os serviços:
```
docker build -t website-licitaiba .
```
Inicie o contêiner Docker: 
```
docker run -d -p 8080:80 -v ./:/usr/share/nginx/html website-licitaiba
```

Acesse em um navegador digitando:
```
http://localhost:8080 
```

*Dicas: Use o comando `docker ps` para listar os contêineres em execução e `docker stop nome_do_contêiner` para parar o contêiner*
