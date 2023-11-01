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

//INCLUI O MENU
includeHTML('menu.html', 'menu')
    .then(() => {})
    .catch((error) => {
        console.error(error);
    });

// INCLUINDO O FOOTER
includeHTML('footer.html', 'footer');