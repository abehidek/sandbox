package aula03;

import java.util.Scanner;

public class Ex03 {

    public static void main() {

        Scanner input = new Scanner(System.in);
        System.out.print("Digite o peso: ");
        double peso = input.nextDouble();
        System.out.print("Digite o altura: ");
        double altura = input.nextDouble();
        double imc = peso/(altura*altura);
        System.out.println("Seu IMC é: " + imc);
    }
}
