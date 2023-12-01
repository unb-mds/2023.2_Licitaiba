document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
    }, 1000);
});


const includeHTML = (path, targetElementId) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    document.getElementById(targetElementId).innerHTML = xhr.responseText;
                    resolve();
                } else {
                    reject(new Error(`Erro: ${path}. Status: ${xhr.status}`));
                }
            }
        };

        xhr.open('GET', path, true);
        xhr.send();
    });
};

// INCLUINDO O MENU
includeHTML('menu.html', 'menu')
    .then(() => {


        var inputBusca = document.getElementById('search-input');

        inputBusca.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                var termoPesquisa = inputBusca.value;
                window.location.href = 'buscar-licitacao.html?pesquisa=' + encodeURIComponent(termoPesquisa);
            }
        });

        var searchButton = document.getElementById('search-button');

        searchButton.addEventListener('click', function() {
            var termoPesquisa = inputBusca.value;
            window.location.href = 'buscar-licitacao.html?pesquisa=' + encodeURIComponent(termoPesquisa);
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