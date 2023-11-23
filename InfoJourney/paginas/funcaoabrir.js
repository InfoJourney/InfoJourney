//Função de esconder os conteudos 

function toggleInfoCamadas() {
    var infoDivs = document.querySelectorAll('.camadas');
    
    infoDivs.forEach(function(div) {
        if (div.style.display === 'none' || div.style.display === '') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}

// valvas, dentro de valvas vamos fechar todos os terciarios de avalvas
function toggleInfoValvas() {
    var infoDivs = document.querySelectorAll('.valvas');
    
    infoDivs.forEach(function(div) {
        if (div.style.display === 'none' || div.style.display === '') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}
// coração, dentro de coracao vamos fechar todos os terciarios e quartenarios de acoracao
function toggleInfoCoracao() {
    var infoDivs = document.querySelectorAll('.coracao');
    var camadas = document.querySelectorAll('.camadas');
    var valvas = document.querySelectorAll('.valvas');
    
    infoDivs.forEach(function(div) {
        if (div.style.display === 'none' || div.style.display === '') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });

//funcao de só
    camadas.forEach(function(div) {
        if (div.style.display === 'block' || div.style.display === 'flex') {
            div.style.display = 'none';
        }
    });

    valvas.forEach(function(div) {
        if (div.style.display === 'block' || div.style.display === 'flex') {
            div.style.display = 'none';
        }
    });

}
// arterias, dentro de arterias vamos fechar todos os terciarios de arteirias
function toggleInfoArterias() {
    var infoDivs = document.querySelectorAll('.arterias');
    
    infoDivs.forEach(function(div) {
        if (div.style.display === 'none' || div.style.display === '') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}

// veias, dentro de veias vamos fechar todos os terciarios de veias 
function toggleInfoVeias() {
    var infoDivs = document.querySelectorAll('.veias');
    
    infoDivs.forEach(function(div) {
        if (div.style.display === 'none' || div.style.display === '') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}

//capilar, dentro de capilar vamos fechar todos os terciarios de capilar
function toggleInfoCapilar() {
    var infoDivs = document.querySelectorAll('.capilar');
    
    infoDivs.forEach(function(div) {
        if (div.style.display === 'none' || div.style.display === '') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}

//sangue, dentro de sangue vamos fechar todos os terciarios de sangue 
function toggleInfoSangue() {
    var infoDivs = document.querySelectorAll('.sangue');
    
    infoDivs.forEach(function(div) {
        if (div.style.display === 'none' || div.style.display === '') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}
// esse é a funçao geral de clicar no h1 e fechar todos os conteudos
function toggleInfoCVS() {
    var infoDivs = document.querySelectorAll('.cvs');
    var camadas = document.querySelectorAll('.camadas');
    var coracao = document.querySelectorAll('.coracao');
    var valvas = document.querySelectorAll('.valvas');
    var arterias =  document.querySelectorAll('.arterias');
    var veias =  document.querySelectorAll('.veias');
    var capilar =  document.querySelectorAll('.capilar');
    var sangue =  document.querySelectorAll('.sangue');

    infoDivs.forEach(function(div) {
        if (div.style.display === 'none' || div.style.display === '') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });


    camadas.forEach(function(div) {
        if (div.style.display === 'block' || div.style.display === 'flex') {
            div.style.display = 'none';
        }
    });

    coracao.forEach(function(div) {
        if (div.style.display === 'block' || div.style.display === 'flex') {
            div.style.display = 'none';
        }
    });

    valvas.forEach(function(div) {
        if (div.style.display === 'block' || div.style.display === 'flex') {
            div.style.display = 'none';
        }
    });

    arterias.forEach(function(div) {
        if (div.style.display === 'block' || div.style.display === 'flex') {
            div.style.display = 'none';
        }
    });

    veias.forEach(function(div) {
        if (div.style.display === 'block' || div.style.display === 'flex') {
            div.style.display = 'none';
        }
    });
    
    capilar.forEach(function(div) {
        if (div.style.display === 'block' || div.style.display === 'flex') {
            div.style.display = 'none';
        }
    });

    sangue.forEach(function(div) {
        if (div.style.display === 'block' || div.style.display === 'flex') {
            div.style.display = 'none';
        }
    });
}