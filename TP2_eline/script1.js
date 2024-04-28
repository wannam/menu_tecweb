

/*cookie*/

window.onload = function () {
    if (!getCookie('cookieConsent')) {
        document.getElementById('cookiePopup').style.display = 'block';
    }
  }
  
function acceptCookies() {
    setCookie('cookieConsent', 'cookie aceito', 30);
    document.getElementById('cookiePopup').style.display = 'none';
}
  
function closePopup() {
    document.getElementById('cookiePopup').style.display = 'none';
}
  
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
  
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


let index = 0; // Start index at 0

const moveTo = e => {
    showSlide(index = e);
};

const changeSlide = e => {
    showSlide(index += e);
};

// Função para exibir o slide correto
const showSlide = e => {
    const images = document.querySelectorAll('.slider-item');
    const indicators = document.querySelectorAll('.slider-indicators span');
    const contents = document.querySelectorAll('.slider-content h3');

    // Se o índice for maior que o número de imagens, resete para 0
    if (e >= images.length) {
        index = 0;
    } 
    // Se o índice for menor que 0, defina como o índice da última imagem
    else if (e < 0) {
        index = images.length - 1;
    }

    // Loop por todas as imagens
    for (let i = 0; i < images.length; i++) {
        // Se a imagem atual é a imagem ativa
        if (i === index) {
            images[i].style.opacity = '1';
            images[i].style.visibility = 'visible'; // Torna a imagem ativa visível
            indicators[i].style.width = '26px';
            indicators[i].style.background = '#fff';
            contents[i].style.transform = 'scale(1)';
            contents[i].style.opacity = '1';
        } 
        // Se a imagem atual não é a imagem ativa
        else {
            images[i].style.opacity = '0';
            images[i].style.visibility = 'hidden'; // Esconde as imagens não ativas
            indicators[i].style.width = '8px';
            indicators[i].style.background = '#ffffffaf';
            contents[i].style.transform = 'scale(0)';
            contents[i].style.opacity = '0';
            contents[i].style.transitionDelay = '0.2s';
        }
    }
};

// Define o intervalo de tempo para 2 segundos (2000 milissegundos)
const intervalTime = 4000;

// Função para avançar automaticamente os slides a cada 2 segundos
const autoSlide = () => {
    setInterval(() => {
        changeSlide(1); // Avança para o próximo slide
    }, intervalTime);
};

// Inicia a função para avançar automaticamente os slides
autoSlide();

// Mostra o primeiro slide ao carregar a página
showSlide(index);

