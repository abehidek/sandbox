package g_oop_conceitos.desafios.formasplanas;

import java.util.Scanner;

public class Quadrado extends FormaPlana {
    public void calcularArea(double num1) {
        System.out.println("Area: "+ (num1*num1));
    }
    public void calcularPerimetro(double num1) {
        System.out.println("Perimetro: "+(num1*4));
    }
    public void calcular() {
        Scanner input = new Scanner(System.in);
        double num1 = inputNumber(input, "Lado");
        calcularArea(num1);
        calcularPerimetro(num1);
    }
}
