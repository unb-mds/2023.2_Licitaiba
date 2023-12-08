function carregarDadosGrafico(municipioSelecionado, anoSelecionado) {
    fetch('https://raw.githubusercontent.com/unb-mds/2023-2-Squad04/main/src/dados/counter.json')
        .then(response => response.json())
        .then(dados => {
            fetch('assets/json/lista_municipios.json')
                .then(response => response.json())
                .then(lista_municipios => {

                    console.log(municipioSelecionado)

                    if (municipioSelecionado == 'Todos') {

                        dados = dados.filter(item => item.municipio === municipioSelecionado && item.ano == anoSelecionado);

                        atualizarGrafico(dados, municipioSelecionado, anoSelecionado);

                    } else {

                        var municipioEncontrado = lista_municipios.find(item => item.id === municipioSelecionado);

                        console.log(municipioEncontrado);

                        if (municipioEncontrado) {
                            dados = dados.filter(item => item.municipio === municipioEncontrado.municipio && item.ano == anoSelecionado);
                        }
                    }

                    console.log(dados);

                    atualizarGrafico(dados, municipioEncontrado.municipio, anoSelecionado);

                })
                .catch(error => console.error('Erro ao carregar dados do segundo arquivo:', error));
        })
        .catch(error => console.error('Erro ao carregar dados do gráfico:', error));
}



function atualizarGrafico(dados, municipioSelecionado, ano) {

    var options = {
        series: [{
            name: 'Quantidade de licitações',
            data: dados.map(item => item.qtd)
        }],
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
                borderRadius: 5,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: dados.map(item => item.mes),
            labels: {
                style: {
                    colors: 'var(--txt-body)',
                    fontSize: '14px',
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: 'var(--txt-body)',
                    fontSize: '14px',
                },
            },
        },
        fill: {
            opacity: 1,
            colors: ['#22abfa']
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return val
                }
            }
        },
    };

    var grafico = document.querySelector("#grafico");
    if (grafico) {
        grafico.remove();
    }

    if (municipioSelecionado == 'Todos') {
        var titulo_grafico = document.getElementById("titulo_grafico");
        titulo_grafico.innerHTML = `Quantidade de licitações extraídas na Paraíba, em ${ano}.`;

    } else {
        var titulo_grafico = document.getElementById("titulo_grafico");
        titulo_grafico.innerHTML = `Quantidade de licitações extraídas em ${municipioSelecionado}, em ${ano}.`;
    }

    var novoGrafico = document.createElement("div");
    novoGrafico.id = "grafico";
    document.querySelector(".graficos").appendChild(novoGrafico);

    var chart = new ApexCharts(novoGrafico, options);
    chart.render();

}

carregarDadosGrafico("Todos", 2023);