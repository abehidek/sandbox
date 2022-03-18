package g_oop_conceitos.desafios;

import java.util.Scanner;

public class Formas {
    public static boolean Numerico(String stringNum) {
        // Função que verifica se o número digitado (String) é númerico
        if (stringNum == null)
            return false;
        try {
            Double.parseDouble(stringNum);
        } catch (NumberFormatException nfe) {
            return false;
        }
        return true;
    }

    public static double inputNumber(Scanner input, String ordemNumero) {
        double numberUserInput = 0;
        while (true) {
            numberUserInput = 0;
            System.out.println("Digite o "+ordemNumero+": ");
            String userinput = input.nextLine();
            if (Numerico(userinput)) {
                numberUserInput = Double.parseDouble(userinput);
                if (numberUserInput <0)
                    System.out.println("Digite um numero positivo!");
                else
                    break;
            }
            else
                System.out.println("Digite novamente!");
        }   
        return numberUserInput;
    }
}
