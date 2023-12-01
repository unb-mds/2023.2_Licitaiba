includeHTML('menu.html', 'menu')
    .then(() => {


        var inputBusca = document.getElementById('search-input');

        inputBusca.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                // FAÇA A BRINCADEIRINHA AQUI ABAIXO
                url = new URL(window.location.origin)
                url.pathname = "buscar-licitacao.html"
                url.searchParams.append("pesquisa", inputBusca.value)
                window.location = url
                //var termoPesquisa = inputBusca.value;
                //window.location.href = 'pesquisar.html?por=' + encodeURIComponent(termoPesquisa);
            }
        });

        var searchButton = document.getElementById('search-button');

        searchButton.addEventListener('click', function() {
            // FAÇA A BRINCADEIRINHA AQUI ABAIXO
            
            var termoPesquisa = inputBusca.value;
            window.location.href = 'pesquisar.html?por=' + encodeURIComponent(termoPesquisa);
        });


        // TROCANDO ENTRE MODO ESCURO E MODO CLARO //
        const colorToggleBtn = document.getElementById('color-toggle');
        let isLightMode = localStorage.getItem('isLightMode') === 'true';

        colorToggleBtn.innerText = isLightMode ? "🌒 Escuro" : "☀️ Claro";

        if (isLightMode) {
            document.body.classList.add('dark-mode');
        }

        colorToggleBtn.addEventListener('click', () => {
            isLightMode = !isLightMode;
            document.body.classList.toggle('dark-mode', isLightMode);

            localStorage.setItem('isLightMode', isLightMode);

            colorToggleBtn.innerText = isLightMode ? "🌒 Escuro" : "☀️ Claro";
        });
    })
    .catch((error) => {
        console.error(error);
    });

// INCLUINDO O FOOTER
includeHTML('footer.html', 'footer');

/*
function buscar(){
    url = new URL(window.location.origin)
    url.pathname = "buscar-licitacao.html"
    url.searchParams.append("pesquisa", busca)
    window.location = url
    
}


onkeyup="event.key == 'Enter' ? buscar() : null"



*/