programa
{
	
	funcao inicio()
	{	
		logico primeiro = verdadeiro
		inteiro numero
		escreva("Digite o número que deseja conferir se é palíndromo: ")
		leia(numero)
		inteiro copia = numero
		inteiro inverso = 0
		inteiro algarismo
		enquanto (numero > 0){
			se (primeiro != verdadeiro){
				inverso *= 10
			}
			algarismo = numero % 10
			numero /= 10
			inverso += algarismo
			primeiro = falso
		}
		se(copia == inverso){
			escreva("palíndromo.")
		}senao{
			escreva("Não é palíndromo.")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 438; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */