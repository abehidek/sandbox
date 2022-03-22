programa
{
	
	funcao inicio()
	{
		real n1,n2,n3,n4
		real p1,p2,p3,p4
		real m1,m2
		escreva("Escreva o numero 1: ")
		leia(n1)
		escreva("Escreva o peso 1: ")
		leia(p1)
		escreva("Escreva o numero 2: ")
		leia(n2)
		escreva("Escreva o peso 2: ")
		leia(p2)
		escreva("Escreva o numero 3: ")
		leia(n3)
		escreva("Escreva o peso 3: ")
		leia(p3)
		escreva("Escreva o numero 4: ")
		leia(n4)
		escreva("Escreva o peso 4: ")
		leia(p4)
		m1 = (n1*p1)+(n2*p2)+(n3*p3)+(n4*p4)
		m2 = m1/(p1+p2+p3+p4)
		escreva("A média ponderada das notas é: "+m2)
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 545; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */