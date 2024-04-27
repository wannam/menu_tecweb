
/*cookie*/

window.onload = function () {
    if (!getCookie('cookieConsent')) {
        document.getElementById('cookiePopup').style.display = 'block';
    }
  }
  
function acceptCookies() {
    setCookie('cookieConsent', 'true', 30);
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

// Função para redefinir o cookie e recarregar a página
function resetAndTest() {
    resetCookie('cookieConsent');
    // Recarrega a página
    window.location.reload();
}