package aula03;

import java.util.Scanner;

public class Ex05 {
    public static void main() {
        Scanner input = new Scanner(System.in);
        System.out.print("Digite a base do triângulo: ");
        double base = input.nextDouble();
        System.out.print("Digite a altura do triângulo: ");
        double altura = input.nextDouble();
        System.out.println("A área do triângulo é: " + (base*altura)/2);
    }
}
