function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >=0 && hora <12) {
        // DIA
        img.src = './img/foto1.jpg'
        document.body.style.background = '#e0ecff'
    } else if (hora >= 12 && hora < 18) {
        // TARDE
        img.src = './img/foto2.jpg'
        document.body.style.background = '#61b0ad'
    } else {
        // NOITE
        img.src = './img/foto3.jpg'
        document.body.style.background = '#f491ff'
    }
}