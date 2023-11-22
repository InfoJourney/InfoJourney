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

function toggleInfoCVS() {
    var infoDivs = document.querySelectorAll('.cvs');
    var camadas = document.querySelectorAll('.camadas');
    var coracao = document.querySelectorAll('.coracao');
    var valvas = document.querySelectorAll('.valvas');
    
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


}