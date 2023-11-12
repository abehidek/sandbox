package g_oop_conceitos.desafios;

import java.util.Arrays;
import java.util.Scanner;

import g_oop_conceitos.desafios.formasplanas.*;
import g_oop_conceitos.desafios.formasEspaciais.*;

public class Main {    
    public static void printArray(String[] arr) {
        System.out.print("Figuras: \n( ");
        for (int i=0;i<arr.length;i++) {
            if (i == (arr.length-1))
                System.out.print(arr[i]);
            else
                System.out.print(arr[i]+", ");
        }
        System.out.print(" )\n: ");
    }
    public static String inputForma(Scanner input) {
        String forma = "";
        String tipoForma = "";
        String[] formasPlanas = {"Quadrado","Circulo","TrianguloEquilatero","HexagonoRegular","Retangulo"};
        String[] formasEspaciais = {"Cubo","Esfera","Cilindro","Cone","Paralelepipedo","Piramide"};
        while (true) {
            tipoForma = "";
            System.out.println("Que tipo de figura você gostaria de calcular?: [plana/espacial]");
            tipoForma = input.nextLine();
            if (tipoForma.equalsIgnoreCase("plana")) {
                tipoForma = "plana";
                break;
            }
            else if (tipoForma.equalsIgnoreCase("espacial")) {
                tipoForma = "espacial";
                break;
            }
            else {
                System.out.println("\nDigite novamente: ");
                continue;
            }
        }
        while (true) {
            forma = "";
            System.out.println("Qual figura " + tipoForma + " você gostaria de calcular?: ");
            if (tipoForma.equals("plana")) {
                printArray(formasPlanas);
                forma = input.nextLine();
                if (Arrays.asList(formasPlanas).contains(forma))
                    break;
            }
            else {
                printArray(formasEspaciais);
                forma = input.nextLine();
                if (Arrays.asList(formasEspaciais).contains(forma))
                    break;
            }
            System.out.println("\nA figura digitada nao existe, tente novamente: ");
        }
        return forma;
    }
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        while (true) {
            String forma = inputForma(input);

            switch (forma) {
                case "Quadrado":
                    Quadrado Quadrado = new Quadrado();
                    Quadrado.calcular();
                    break;
                case "Circulo":
                    Circulo Circulo = new Circulo();
                    Circulo.calcular();
                    break;
                case "TrianguloEquilatero":
                    TrianguloEquilatero TrianguloEquilatero = new TrianguloEquilatero();
                    TrianguloEquilatero.calcular();
                    break;
                case "HexagonoRegular":
                    HexagonoRegular HexagonoRegular = new HexagonoRegular();
                    HexagonoRegular.calcular();
                    break;
                case "Retangulo":
                    Retangulo Retangulo = new Retangulo();
                    Retangulo.calcular();
                    break;
                case "Cubo":
                    Cubo Cubo = new Cubo();
                    Cubo.calcular();
                    break;
                case "Esfera":
                    Esfera Esfera = new Esfera();
                    Esfera.calcular();
                    break;
                case "Cilindro":
                    Cilindro Cilindro = new Cilindro();
                    Cilindro.calcular();
                    break;
                case "Cone":
                    Cone Cone = new Cone();
                    Cone.calcular();
                    break;
                case "Paralelepipedo":
                    Paralelepipedo Paralelepipedo = new Paralelepipedo();
                    Paralelepipedo.calcular();
                    break;
                case "Piramide":
                    Piramide Piramide = new Piramide();
                    Piramide.calcular();
                    break;
            }
            System.out.println("Deseja sair do programa? [S/N]: ");
            String opc = input.nextLine();
            if (opc.equalsIgnoreCase("N")) {
                input.close();
                break;
            }   
        }
    }
}
