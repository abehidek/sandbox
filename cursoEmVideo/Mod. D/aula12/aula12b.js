// CONDIÇÒES ANINHADAS
var hora = new Date().getHours()
console.log(`Agora são exatamente ${hora}`)
if (hora < 12)
{
    console.log('Bom dia!')
}
else if (hora <= 18)
{
    console.log('Boa tarde!')
}
else
{
    console.log('Boa Noite')
}