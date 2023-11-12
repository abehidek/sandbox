package h_lista.desafios;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import java.util.Scanner;

public class ValidadorCPF {
    public static boolean numerico(String string) {
        if (string == null)
            return false;
        try {
            Double.parseDouble(string);
        } catch (NumberFormatException nfe) {
            return false;
        }
        return true;
    }
    public static String[] entradaCPF(Scanner input) {
        String cpf = "";
        char[] arr_cpf;
        while (true) {
            System.out.println("Digite um CPF: ");
            cpf = input.nextLine();
            if (numerico(cpf))
                break;
            System.out.println("CPF digitado é incorreto");
        }
        if (cpf.length() > 10)
            arr_cpf = Arrays.copyOf(cpf.toCharArray(), cpf.toCharArray().length-2);
        else 
            arr_cpf = cpf.toCharArray();
        String result [] = {String.valueOf(arr_cpf), cpf};
        return result;
    }
    public static String calcularCPF(String cpf, int length) {
        if (length == 11)
            return cpf;
        char[] arr_cpf = cpf.toCharArray();
        int soma = 0;
        for (int i = 0, j = arr_cpf.length+1; i < arr_cpf.length && j > 1; i++, j--) {
            soma += Character.getNumericValue(arr_cpf[i]) * j;
        }
        int resultado = 11 - (soma % 11);
        if (resultado > 9)
            resultado = 0;
        arr_cpf = Arrays.copyOf(arr_cpf, arr_cpf.length + 1);
        arr_cpf[arr_cpf.length - 1] = Integer.toString(resultado).charAt(0);
        String str_cpf = String.valueOf(arr_cpf);
        return calcularCPF(str_cpf, str_cpf.length());
    }
    public static void saidaCPF(String str_cpf, String calc_cpf) {
        if (str_cpf.equals(calc_cpf))
            System.out.println("CPF digitado é válido!");
        else
            System.out.println("CPF digitado é incorreto");
        System.out.println("CPF correto: "+formatarCPF(calc_cpf));
    }
    public static String formatarCPF(String cpf) {
        char [] arr_cpf = cpf.toCharArray();
        Character[] char_obj_cpf = new String(arr_cpf).chars()
            .mapToObj(c -> (char) c)
            .toArray(Character[]::new);
        List<Character> arr_list_cpf = new ArrayList<Character>();
        arr_list_cpf.addAll(Arrays.asList(char_obj_cpf));
        arr_list_cpf.add(3, '.');
        arr_list_cpf.add(7, '.');
        arr_list_cpf.add(11, '-');
        arr_cpf = new char[arr_list_cpf.size()];
        for(int i = 0; i < arr_list_cpf.size(); i++) {
            arr_cpf[i] = arr_list_cpf.get(i);
        }
        return String.valueOf(arr_cpf);
    }
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        while (true) {
            String[] str_cpf = entradaCPF(input);
            String calc_cpf = calcularCPF(str_cpf[0], str_cpf[0].length());
            saidaCPF(str_cpf[1], calc_cpf);
            System.out.println("Deseja continuar? [S/N]: ");
            char[] o = input.nextLine().toUpperCase().toCharArray();
            if (o[0] == 'N')
                break;
        }
        input.close();
    }
}