let url = "https://raw.githubusercontent.com/unb-mds/2023-2-Squad04/main/src/dados/data.json"


var licitacoes = []



function barra_busca() {
    return (window.location.searchParams('pesquisa') != null) ? `placeholder="${window.location.searchParams('pesquisa')}` : 'placeholder="Buscar Licitação"'
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


            // BUSCA EM SI
            var link = new URL(window.location)
            var pesquisa = link.searchParams.get('pesquisa')
            console.log("pesquisa: " + pesquisa)
            window.alert("aha")
            print("<h1>boooyaaaa!!!</h1>")



        });
    };

    mostrar_licitacoes()
}