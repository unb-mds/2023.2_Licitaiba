function carregarDadosGrafico(municipioSelecionado, anoSelecionado) {
    fetch('grafico.json')
        .then(response => response.json())
        .then(dados => {
            if (municipioSelecionado) {
                dados = dados.filter(item => item.municipio === municipioSelecionado);
            }

            if (anoSelecionado) {
                dados = dados.filter(item => item.ano === anoSelecionado);
            }

            atualizarGrafico(dados, municipioSelecionado, anoSelecionado);
        })
        .catch(error => console.error('Erro ao carregar dados do gráfico:', error));
}

function atualizarGrafico(dados, municipioSelecionado, anoSelecionado) {
    fetch('assets/json/lista_municipios.json')
        .then(response => response.json())
        .then(municipio => {
            if (municipioSelecionado) {
                municipio = municipio.filter(item => item.id === municipioSelecionado);
            }

            var options = {
                series: [{
                    name: 'Quantidade de licitações',
                    data: dados.map(item => item.valor)
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

            if (municipioSelecionado == 'todos') {
                var titulo_grafico = document.getElementById("titulo_grafico");
                titulo_grafico.innerHTML = `Quantidade de licitações extraídas na Paraíba, em ${anoSelecionado}.`;
            } else {
                var titulo_grafico = document.getElementById("titulo_grafico");
                titulo_grafico.innerHTML = `Quantidade de licitações extraídas em ${municipio.map(item => item.municipio)}, em ${anoSelecionado}.`;
            }

            var novoGrafico = document.createElement("div");
            novoGrafico.id = "grafico";
            document.querySelector(".graficos").appendChild(novoGrafico);

            var chart = new ApexCharts(novoGrafico, options);
            chart.render();
        })
        .catch(error => console.error('Erro ao carregar a lista de munícipios', error));
}

carregarDadosGrafico("todos", 2023);