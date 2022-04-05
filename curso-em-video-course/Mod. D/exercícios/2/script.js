function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txt_ano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('rad_sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'homem'
            if(idade>=0 && idade<4){
                img.setAttribute('src', './img/baby1.jpg')
            } 
            if(idade>=4 && idade<13){
                img.setAttribute('src', './img/child1.jpg')
            } 
            else if(idade>=13 && idade<21){
                img.setAttribute('src', './img/teen1.jpg')
            }
            else if(idade>=21 && idade<55){
                img.setAttribute('src', './img/adult1.jpg')
            }
            else if(idade>=55){
                img.setAttribute('src', './img/elder1.jpg')
            }
        }
        else if (fsex[1].checked) {
            genero = 'mulher'
            if(idade>=0 && idade<4){
                img.setAttribute('src', './img/baby2.jpg')
            } 
            if(idade>=4 && idade<13){
                img.setAttribute('src', './img/child2.jpg')
            } 
            else if(idade>=13 && idade<21){
                img.setAttribute('src', './img/teen2.jpg')
            }
            else if(idade>=21 && idade<55){
                img.setAttribute('src', './img/adult2.jpg')
            }
            else if(idade>=55){
                img.setAttribute('src', './img/elder2.jpg')
            }

        }
        else {
            alert('Deu erro')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um(a)  ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}