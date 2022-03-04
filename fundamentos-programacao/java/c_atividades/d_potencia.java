package c_atividades;

import java.util.Scanner;

public class d_potencia {
    public static void main() {
        Scanner input = new Scanner(System.in);
        System.out.print("Digite um valor: ");
        double valor = input.nextDouble();
        System.out.println("O quadrado é: " + Math.pow(valor, 2));
        System.out.println("O cubo é: " + Math.pow(valor, 3));
        input.close();
    }
}
