package f_loop.desafios;

import java.util.Scanner;

public class NumeroPrimo {
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
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        while (true) {
            String userinput;
            boolean primo = true;
            System.out.println("Digite um numero ou 'sair' para fechar o programa: ");
            userinput = input.nextLine();
            if (Numerico(userinput)) {
                // do math
                int number = Integer.valueOf(userinput);
                for (int i=2; i <= number/2; i++) {
                    if (number % i == 0)
                        primo = false;
                }
                if (primo && number != 1) 
                    System.out.println("E primo");
                else
                    System.out.println("Nao e primo");
            } else {
                if (userinput.equalsIgnoreCase("sair")) {
                    input.close();
                    break;
                }
                else {
                    continue;
                }
            }            
        }
    }
}

