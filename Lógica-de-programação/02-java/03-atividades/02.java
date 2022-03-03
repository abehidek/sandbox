package aula03;

import java.util.Scanner;

public class Ex02 {
    public static void main() {
        Scanner input = new Scanner(System.in);
        System.out.print("Digite a temperatura fahrenheit: ");
        double fah = input.nextDouble();
        double cel = (fah - 32) * 5/9;
        System.out.print("A temperatura em celsius é: " + cel);
    }
}
