package c_atividades;

import java.util.Scanner;

public class b_temperatura2 {
    public static void main() {
        Scanner input = new Scanner(System.in);
        System.out.print("Digite a temperatura fahrenheit: ");
        double fah = input.nextDouble();
        double cel = (fah - 32) * 5/9;
        System.out.print("A temperatura em celsius é: " + cel);
        input.close();
    }
}
