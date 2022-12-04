// CONDIÇÃO ANINHADA É UM IF DENTRO DO IF
var idade = 18
// if (idade < 16)
// {
//     console.log("Não vota")
// }
// else 
// {
//     if (idade >= 16 && idade < 18)
//     {
//         console.log('Voto opcional')
//     }
//     else
//     {
//         console.log('Voto obrigatório')
//     }
// }

// OUTRA MANEIRA É USAR A CLÁUSULA ELSE IF QUE FAZ A MESMA COISA

if (idade < 16)
{
    console.log('Não vota')
}
else if (idade < 18 || idade > 65)
{
    console.log('Voto opcional')
}
else if (idade >= 18) // ou else if {}
{
    console.log('Voto obrigatório')
}