let url = "https://raw.githubusercontent.com/unb-mds/2023-2-Squad04/main/src/dados/data.json"
var licitacoes = []

var urlParams = new URLSearchParams(window.location.search);
var valorPesquisa = urlParams.get('pesquisar_por');

if (valorPesquisa) {
    var filtroMunicipio = urlParams.get('filtro_municipio');
    var filtroData = urlParams.get('filtro_data');
    //console.log(valorPesquisa, filtroMunicipio, filtroData)
    var tagFiltroMunicipio = document.getElementById("filtro_municipio")
    tagFiltroMunicipio.value = filtroMunicipio

    var tagFiltroData = document.getElementById("filtro_data")
    tagFiltroData.value = filtroData

    var tagSearch = document.getElementById("pesquisar_por")
    tagSearch.value = valorPesquisa

    buscar_licitacoes()
}


function buscar_licitacoes() {

    const temp = fetch(url)
        .then(res => res.json())
        .then((out) => {
            return out
        }).catch(err => console.error(err));
    const mostrar_licitacoes = () => {
        temp.then((a) => {
            licitacoes = a;
            var lista_licitacoes = []
            
            //window.alert("teste " + municipios)
            // BUSCA EM SI
            var link = new URL(window.location)
            var valorPesquisa = link.searchParams.get('pesquisar_por')
            var limite = 100
            for (let licitacao in licitacoes) {
                limite--
                if(limite <= 0){
                    break
                }
                //console.log(licitacoes[licitacao]['Texto_encontrado'])
                
                if (licitacoes[licitacao]['Texto_encontrado'].search(valorPesquisa) > -1) {
                    if (licitacoes[licitacao]['Data'] == filtroData || filtroData == ''){
                        if (licitacoes[licitacao]['Municipio'].toLowerCase().replaceAll(" ", "_").replaceAll(/[àáãâ]/g, 'a').replaceAll(/[èéêẽ]/g, 'e').replaceAll(/[íìîĩ]/g, 'i').replaceAll(/[òóõô]/g, 'o').replaceAll(/[úùũû]/g, 'u').replaceAll(/[ç]/g, 'c') == filtroMunicipio || filtroMunicipio == ''){
                            lista_licitacoes.push(licitacoes[licitacao])
                        }
                    }
                }
            }
            //console.log[lista_licitacoes]
            var resultados = document.getElementById("resultados")

            resultados.innerHTML = `<h3 class="subtopico" style="font-size: 30px; margin:auto; text-align: center;">Resultados</h3>`

            for (let licitacao in lista_licitacoes) {
                resultados.innerHTML += (`<div class="result-container d-flex justify-content-between align-items-center">
                        <p class="mb-0">${lista_licitacoes[licitacao]['Texto_encontrado'].slice(0,230)}... <a href="#" onclick="mostrarResultados(listaResultados, i)" class="details-link" data-toggle="modal" data-target="#myModal">Mais detalhes</a></p>
                        
                    </div>
                `);

            }


        });
    };

    mostrar_licitacoes()
}