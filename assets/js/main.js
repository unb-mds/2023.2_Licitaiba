let url = "https://raw.githubusercontent.com/unb-mds/2023-2-Squad04/main/src/dados/data.json"


var licitacoes = []


var urlParams = new URLSearchParams(window.location.search);
var valorPesquisa = urlParams.get('pesquisar_por');

if (valorPesquisa) {
    var filtroMunicipio = urlParams.get('filtro_municipio');
    var filtroData = urlParams.get('filtro_data');
    console.log(valorPesquisa, filtroMunicipio, filtroData)
    var tagFiltroMunicipio = document.getElementById("filtro_municipio")
    tagFiltroMunicipio.value = filtroMunicipio

    var tagFiltroData = document.getElementById("filtro_data")
    tagFiltroData.value = filtroData

    var tagSearch = document.getElementById("pesquisar_por")
    tagSearch.value = valorPesquisa
}

// function barra_busca() {
//     return (window.location.searchParams('pesquisar_por') != null) ? `placeholder="${window.location.searchParams('pesquisar_por')}` : 'placeholder="Buscar Licitação"'
// }

buscar_licitacoes()



function buscar_licitacoes() {

    const temp = fetch(url)
        .then(res => res.json())
        .then((out) => {
            return out
        }).catch(err => console.error(err));
    const mostrar_licitacoes = () => {
        temp.then((a) => {
            licitacoes = a;
            console.log(licitacoes)
            var lista_licitacoes = []

            // BUSCA EM SI
            var link = new URL(window.location)
            var valorPesquisa = link.searchParams.get('pesquisar_por')
            for(let licitacao in licitacoes){
                console.log(licitacoes[licitacao]['Texto_encontrado'])
                if(licitacoes[licitacao]['Texto_encontrado'].search(valorPesquisa) > -1){
                    lista_licitacoes.push(licitacoes[licitacao])
                    console.log("teste " + licitacoes[licitacao]['Texto_encontrado'])
                }
            }
            console.log[lista_licitacoes]
            var resultados = document.getElementById("resultados")
            for(let licitacao in lista_licitacoes){
                resultados.innerHTML += (`<div class="result-container d-flex justify-content-between align-items-center">
                        <p class="mb-0">${lista_licitacoes[licitacao]['Texto_encontrado']}</p>
                        <a href="#" onclick="mostrarResultados(listaResultados, i)" class="details-link" data-toggle="modal" data-target="#myModal">Mais Detalhes</a>
                    </div>
                `);

            } 


        });
    };

    mostrar_licitacoes()
}