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
<<<<<<< HEAD
=======
            //console.log(licitacoes)
>>>>>>> e1f1660b16c51da92a84b400d2c25793c5f7db4c
            var lista_licitacoes = []
            
            // BUSCA EM SI

            var limite = 100
            for (let licitacao in licitacoes) {
<<<<<<< HEAD
                limite--
                if(limite <= 0){
                    break
                }
                
                if (licitacoes[licitacao]['Texto_encontrado'].search(valorPesquisa) > -1 ) {
                    if (licitacoes[licitacao]['Data'] == filtroData || filtroData == ''){
                        if (licitacoes[licitacao]['Municipio'].toLowerCase().replaceAll(" ", "_").replaceAll(/[àáãâ]/g, 'a').replaceAll(/[èéêẽ]/g, 'e').replaceAll(/[íìîĩ]/g, 'i').replaceAll(/[òóõô]/g, 'o').replaceAll(/[úùũû]/g, 'u').replaceAll(/[ç]/g, 'c') == filtroMunicipio || filtroMunicipio == 'todos'){
                            lista_licitacoes.push(licitacoes[licitacao])
                        }
                    }
                }
            }
            
=======
                //console.log(licitacoes[licitacao]['Texto_encontrado'])
                if (licitacoes[licitacao]['Texto_encontrado'].search(valorPesquisa) > -1) {
                    lista_licitacoes.push(licitacoes[licitacao])
                        //console.log("teste " + licitacoes[licitacao]['Texto_encontrado'])
                }
            }
            //console.log[lista_licitacoes]
>>>>>>> e1f1660b16c51da92a84b400d2c25793c5f7db4c
            var resultados = document.getElementById("resultados")

            resultados.innerHTML = `<h3 class="subtopico" style="font-size: 30px; margin:auto; text-align: center;">Resultados</h3>`


            if (lista_licitacoes.length == 0){
                resultados.innerHTML += (`<div class="result-container d-flex justify-content-between align-items-center">
                        <p class="mb-0">Não foi encontrada nenhuma licitação com os termos usados 😢</p>
                        
                    </div>
                `);
                return
            }

            for (let licitacao in lista_licitacoes) {
                resultados.innerHTML += (`<div class="result-container d-flex justify-content-between align-items-center">
                        <p class="mb-0">${lista_licitacoes[licitacao]['Texto_encontrado'].slice(0,230)}... <a href="#" onclick="mostrarResultados('${lista_licitacoes[licitacao]['Codigo_identificador']}')" class="details-link" data-toggle="modal" data-target="#myModal">Mais detalhes</a></p>
                        
                    </div>
                `);

            }


        });
    };

    mostrar_licitacoes()
}


function mostrarResultados(id){
    const temp = fetch(url)
        .then(res => res.json())
        .then((out) => {
            return out
        }).catch(err => console.error(err));
    const resultado = () => {
        temp.then((a) => {
            licitacoes = a;
            
            const searchIndex = licitacoes.findIndex((aux) => aux['Codigo_identificador']==id);

            var modal = document.getElementById("modal-data")
            modal.innerHTML = (`
                <p>${licitacoes[searchIndex]["Texto_encontrado"]}</p>
            `)
            var modal_buttons = document.getElementById("modal-buttons")
            modal_buttons.innerHTML = (`

                <button type="button" class="btn-2" style="padding: 5px 10px;"  onclick="window.location.href = 'https://www-storage.voxtecnologia.com.br/?m=sigpub.publicacao&f=334&i=${licitacoes[searchIndex]["Titulo_PDF"]}'"><i class="fa-solid fa-download"></i> Baixar PDF</button>
                <button type="button" class="btn-3" style="padding: 5px 10px;" data-dismiss="modal">Fechar</button>
            
            `)

        });
    }
    resultado()
}